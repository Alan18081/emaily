const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const mongoose = require('mongoose');
const path = require('path');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');
const Path = require('path-parser');
const {URL} = require('url');
const _ = require('lodash');
const feedbackTemplate = require('../services/htmlTemplate/feedbackTemplate');

const Survey = mongoose.model('surveys');

module.exports = app => {
  app.get('/api/surveys', requireLogin, async (req,res) => {
    const surveys = await Survey.find({ _user: req.user.id });
    res.send(surveys);
  });

  app.delete('/api/surveys/:surveyId', async (req,res) => {
    const id = req.params.surveyId;
    await Survey.deleteOne({_user: req.user.id,_id: id});
    res.sendStatus(200);
  });

  app.get('/api/surveys/:surveyId/:choice',(req,res) => {
    res.send(feedbackTemplate);
  });

  app.post('/api/surveys/webhooks',(req,res) => {
    console.log('Mark');
    const events = _(req.body)
      .map(({url,email}) => {
        const p = new Path('/api/surveys/:surveyId/:choice');
        const match = p.test(new URL(url).pathname);
        if(match) {
          return {
            email,
            surveyId: match.surveyId,
            choice: match.choice
          };
        }
      })
      .compact()
      .uniqBy('email','surveyId')
      .value();
    console.log(events);
      events.forEach(({surveyId,email,choice}) => {
         Survey.updateOne(
          {
            _id: surveyId,
            recipients: {
              $elemMatch: {
                email: email,
                responded: false
              }
            }
          },
          {
            $inc: { [choice]: 1 },
            $set: {'recipients.$.responded': true},
            lastResponded: new Date()
          }
        ).exec();
    });
  });

  app.post('/api/surveys',requireLogin,requireCredits, async (req,res) => {
    const {title,subject,body,recipients,from} = req.body;
    const survey = new Survey({
      title,
      subject,
      body,
      from,
      recipients: recipients.split(',').map(email => ({email})),
      _user: req.user.id,
      dateSend: Date.now()
    });

    const mailer = new Mailer(survey,surveyTemplate(survey),from);

    let user;

    try {
      await mailer.send();
      await survey.save();
      req.user.credits -= 1;
      user = await req.user.save();
    }
    catch(err) {
      console.log(err);
      res.status(422).send(err);
    }
    res.send(user);
  });
};
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Draft = mongoose.model('drafts');

module.exports = (app) => {

  app.get('/api/drafts',requireLogin,async (req,res) => {
    const drafts = await Draft.find({ _user: req.user.id });
    res.send(drafts);
  });

  app.post('/api/drafts/:draftId', async (req,res) => {
    const {title,subject,body,recipients,from} = req.body;
    const draft = new Draft({
      title,
      subject,
      body,
      from,
      recipients: recipients ? recipients.split(',').map(email => ({email})) : '',
      _user: req.user.id,
    });
    await Draft.updateOne({_id: req.params.draftId, _user: req.user.id},{
      '$set': draft
    }).exec();
    res.sendStatus(200);
  });

  app.delete('/api/drafts/:draftId', async (req,res) => {
    const id = req.params.draftId;
    await Draft.deleteOne({_user: req.user.id,_id: id});
    res.sendStatus(200);
  });

  app.post('/api/drafts',requireLogin,async (req,res) => {
    const {draftId,title,subject,body,recipients,from} = req.body;
    const oldDraft = await Draft.findOne({draftId});
    console.log(draftId);
    const newDraft = {
      title,
      subject,
      body,
      draftId,
      from,
      recipients: recipients ? recipients.split(',').map(email => ({email})) : '',
      _user: req.user.id
    };
    try {
      if(oldDraft) {
        await Draft.updateOne({draftId: draftId},{
          '$set':  newDraft
        })
      }
      else {
        await new Draft(newDraft).save();
      }
      res.sendStatus(200);
    }
    catch(err) {
      console.log('Error',err);
      res.status(422).send(err);
    }
  });
};
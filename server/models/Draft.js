const mongoose = require('mongoose');
const {Schema} = mongoose;
const RecipientSchema = require('./Recipient');

const DraftSchema = new Schema({
  title: String,
  body: String,
  subject: String,
  from: String,
  draftId: Number,
  recipients: [RecipientSchema],
  _user: {type: Schema.Types.ObjectId, ref: 'User'},
  dateSend: Date,
  lastResponded: Date
});

mongoose.model('drafts', DraftSchema);

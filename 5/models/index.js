const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const chat = new Schema({
  author: ObjectId,
  user: String,
  messages: Array
});

module.exports = mongoose.model('chat',chat);



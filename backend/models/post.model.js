///////////////////
//  Post Model   //
///////////////////

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
  username: { type: String, required: true }, // Poster
  description: { type: String, required: true },
  value: { type: Number, },
}, {
  timestamps: true,
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
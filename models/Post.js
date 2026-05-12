const mongoose = require('mongoose');
const PostSchema = new mongoose.Schema({
  title: String,
  category: String,
  description: String,
  image: String,
  contactInfo: String,
  status: { type: String, default: 'pending' },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });
module.exports = mongoose.model('Post', PostSchema);

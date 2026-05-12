const mongoose = require('mongoose');
const ReportSchema = new mongoose.Schema({
  postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
  reporterId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  reason: String
}, { timestamps: true });
module.exports = mongoose.model('Report', ReportSchema);

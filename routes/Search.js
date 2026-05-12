
const express = require('express');
const Post = require('../models/Post');
const router = express.Router();

router.get ( async (req, res) => {
  const { q, category, page = 1 } = req.query;
  const query = { status: 'approved' };
  if (q) query.title = { $regex: q, $options: 'i' };
  if (category) query.category = category;

  const posts = await Post.find(query

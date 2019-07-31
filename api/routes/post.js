const express = require('express');
const {defaultRoute, getPost, createPost} = require('../controllers/post');
const validator = require('../validator')
const router = express.Router();

router.get("/", defaultRoute);
router.get(`/post`, getPost);
router.post(`/post`, validator.createPostValidator,createPost);

module.exports = router;
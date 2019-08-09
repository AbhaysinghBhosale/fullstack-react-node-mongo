const express = require('express');
const {defaultRoute, getPost, createPost, updatePost} = require('../controllers/post');
const validator = require('../validator')
const router = express.Router();

router.get("/", defaultRoute);
router.get(`/post`, getPost);
router.post(`/post`, validator.createPostValidator,createPost);
router.post(`/updatepost`, validator.updatePostValidator,updatePost);

module.exports = router;
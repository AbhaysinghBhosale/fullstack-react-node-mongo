const express = require('express');
const {getPosts, getPost, createPost, updatePost, deletePost} = require('../controllers/post');
const validator = require('../validator')
const router = express.Router();

router.get(`/getposts`, getPosts);
router.get(`/getpost`, validator.getPostValidator, getPost);
router.post(`/createpost`, validator.createPostValidator,createPost);
router.post(`/updatepost`, validator.updatePostValidator,updatePost);
router.post(`/deletepost`, validator.deletePostValidator,deletePost);

module.exports = router;
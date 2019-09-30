const express = require('express');
const {getUsers, getUser, createUser, updateUser, deleteUser} = require('../controllers/user');
const validator = require('../validator')
const router = express.Router();

router.get(`/getUsers`, getUsers);
router.get(`/getUser`, validator.getPostValidator, getUser);
router.post(`/createUser`, validator.createUserValidator,createUser);
router.post(`/updateUser`, validator.updatePostValidator,updateUser);
router.post(`/deleteUser`, validator.deletePostValidator,deleteUser);

module.exports = router;
const Post = require('../models/post');

//Get all posts
exports.getPosts = (req,res)=>{
    Post.find().select("_id title body").then(posts => {
        res.json({posts});
    }).catch( err => {
        res.status(500).json({
            error: err
        });
    })
}

//get single post by id
exports.getPost = (req,res)=>{
    Post.findById(req.body._id).select("_id title body").then(posts => {
        res.json({posts});
    }).catch( err => {
        res.status(500).json({
            error: err
        });
    })
}

//create a post
exports.createPost = (req,res) =>{
    const post = new Post(req.body);
    post.save().then(result => {
        res.status(200).json({
            post:result
        });
    }).catch( err => {
        res.status(500).json({
            error: err
        });
    })
}

//update a post
exports.updatePost = (req,res) =>{
    Post.findByIdAndUpdate(req.body._id, req.body,{new:true}).then(result => {
        res.status(200).json({
            post: result
        });
    }).catch( err => {
        res.status(500).json({
            error: err
        });
    })
}

exports.deletePost = (req,res) =>{
    Post.findByIdAndDelete(req.body._id).then(posts => {
        res.status(200).json({posts});
    }).catch( err => {
        res.status(500).json({
            error: err
        });
    })
}
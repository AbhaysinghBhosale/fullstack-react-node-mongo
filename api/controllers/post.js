const Post = require('../models/post');

exports.defaultRoute = (req,res)=>{
    res.send('Welcome to Node Application');
}

exports.getPost = (req,res)=>{
    const posts = Post.find()
        .select("_id title body")
        .then(posts => {
            res.json({posts});
        }).catch( err => 
            console.log(err) 
        )
}


exports.createPost = (req,res) =>{
    const post = new Post(req.body);
    post.save().then(result => {
        res.status(200).json({
            post:result
        });
    })
}

exports.updatePost = (req,res) =>{
    const post = new Post(req.body);
    post.findByIdAndUpdate().then(result => {
        res.status(200).json({
            post:result
        });
    })
}
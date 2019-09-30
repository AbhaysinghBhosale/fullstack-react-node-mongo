const User = require('../models/user');

//Get all users
exports.getUsers = (req,res)=>{
    User.find().select("_id firstname lastname username email phone createdAt").then(users => {
        res.json({users});
    }).catch( err => {
        res.status(500).json({
            error: err
        });
    })
}

//get single user by id
exports.getUser = (req,res)=>{
    User.findById(req.body._id).select("_id title body").then(users => {
        res.json({users});
    }).catch( err => {
        res.status(500).json({
            error: err
        });
    })
}

//create a user
exports.createUser = (req,res) =>{
    const users = new User(req.body);
    users.save().then(result => {
        res.status(200).json({
            users:result
        });
    }).catch( err => {
        res.status(500).json({
            error: err
        });
    })
}

//update a user
exports.updateUser = (req,res) =>{
    User.findByIdAndUpdate(req.body._id, req.body,{new:true}).then(result => {
        res.status(200).json({
            user: result
        });
    }).catch( err => {
        res.status(500).json({
            error: err
        });
    })
}

exports.deleteUser = (req,res) =>{
    User.findByIdAndDelete(req.body._id).then(user => {
        res.status(200).json({user});
    }).catch( err => {
        res.status(500).json({
            error: err
        });
    })
}
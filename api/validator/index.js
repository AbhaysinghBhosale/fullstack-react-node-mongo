exports.createPostValidator = (req,res,next)=>{
    //validate title
    req.check('title','Please enter post title').notEmpty();
    req.check('title','Post title must be min 10 and max 150 characters').isLength({min:10,max:150});

    //validate body
    req.check('body','Please enter post body').notEmpty();
    req.check('body','Post body must be min 4 and max 2000 characters').isLength({min:4,max:2000});

    const errors = req.validationErrors();
    if(errors){
        const firstError = errors.map((error) => error.msg)[0];
        return res.status(400).json({error:firstError});
    }
    //proceed to next middleware
    next();
}

exports.getPostValidator = (req,res,next) =>{
    //validate id
    req.check('_id','Please enter post id').notEmpty();

    const errors = req.validationErrors();
    if(errors){
        const firstError = errors.map((error) => error.msg)[0];
        return res.status(400).json({error:firstError});
    }
    //proceed to next middleware
    next();
}

exports.updatePostValidator = (req,res,next) =>{

    //validate id
    req.check('_id','Please enter post id').notEmpty();
    //validate title
    req.check('title','Please enter post title').notEmpty();
    req.check('title','Post title must be min 10 and max 150 characters').isLength({min:10,max:150});

    //validate body
    req.check('body','Please enter post body').notEmpty();
    req.check('body','Post body must be min 4 and max 2000 characters').isLength({min:4,max:2000});

    const errors = req.validationErrors();
    if(errors){
        const firstError = errors.map((error) => error.msg)[0];
        return res.status(400).json({error:firstError});
    }
    //proceed to next middleware
    next();
}

exports.deletePostValidator = (req,res,next) =>{
    //validate id
    req.check('_id','Please enter post id').notEmpty();

    const errors = req.validationErrors();
    if(errors){
        const firstError = errors.map((error) => error.msg)[0];
        return res.status(400).json({error:firstError});
    }
    //proceed to next middleware
    next();
}

exports.createUserValidator = (req,res,next)=>{
    //validate title
    req.check('firstname','Please enter firstname').notEmpty();
    req.check('lastname','Please enter lstname').notEmpty();
    req.check('email','Please enter email').notEmpty();
    req.check('email','Please enter valid email').isEmail();
    req.check('phone','Phone number must be min 6 and max 14 characters').isLength({min:6,max:14});

    const errors = req.validationErrors();
    if(errors){
        const firstError = errors.map((error) => error.msg)[0];
        return res.status(400).json({error:firstError});
    }
    //proceed to next middleware
    next();
}

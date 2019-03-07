'use strict';
var express=require('express');
var router=express.Router();

router.get('/checkuserloginornot', function(req,res){

    if(req.session.isLoggedIn == 'Y')
    {
       var obj = { };
       obj.status="login";
       console.log(obj);
 
       res.send(obj);
       
    }
    else{
       var obj = { };
       obj.status="logout";
       console.log(obj);
       
       res.send(obj);
       
    }
 })

router.get('/',function(req,res){
    Users.find({},function(err,users){
        if(err){
            res.status(500);
            res.semd('');
        }
        else{
            res.status(200);
            res.send(users);
        }

    });

});
router.post('/',function(req,res){
    var users=new Users();
    users.name=req.body.name;
    users.password=req.body.password;
    users.email=req.body.email;
    users.save(function(err,user){
        if(err)
        {
            res.status(500);
            res.send('');

        }
        else{
            res.status(201);
            res.send(user);
        }
    });


});
router.get('/:userid',function(req,res){
    console.log(req.params.userid);
    Users.findOne({_id:req.params.userid},function(err,users){
        if(err){
            res.status(500);
            res.send('');
        }
        else{
            res.status(200);
            res.send(users);
        }

    });

});
router.delete('/:userid',function(req,res){
    Users.findOne({_id:req.params.userid},function(err,user){
        if(err)
        {
            res.status(500);
            res.send('');
        }
        else{
           
            user.remove(function(err){
                if(err){
                   res.status(500);
                   res.send('');
                }else{
                   res.status(204);
                   res.send('');
                }
            });



        }
    });
});

router.put('/:userid',function(req,res){
    Users.findOne({_id:req.params.userid},function(err,user){
        if(err)
        {
            res.status(500);
            res.send('');
        }
        else{
           
            user.name=req.body.name;
            user.password=req.body.password;
            user.email=req.body.email;
            user.save(function(err,user){
                if(err)
                {
                    res.status(500);
                    res.send('');
        
                }
                else{
                    res.status(201);
                    res.send(user);
                }
            });



        }
    });
});





module.exports=router;

let User = require('../model/user');

exports.getUser = (req,res)=>{
    User.find({},(err,people)=> {
        if(err) {
            res.send('Data Not Found');
        } else {
            res.send(people);
        }
    });
}

exports.addUser = (req,res)=> {
    let people = new User();
    people.name = req.body.name;
    people.email=req.body.email;

    people.save((err,user)=> {
        if(err) {
            res.send('');
        } else {
            res.send(user);
        }
    });
}


exports.getUserById = (req,res) => {
    User.findOne({_id:req.params._id}, (err,people)=> {
        if(err) {
            res.send('');
        } else {
            res.send(people);
        }
    });
};

exports.deleteUser = (req,res)=> {
    User.findOne({_id:req.params._id}, (err,people)=> {
        if (err) {
            res.send('');
        } else {
            people.remove();
        }
    });
};

exports.updateUser = (req,res) => {
    User.findOne({_id:req.params._id}, (err,people) => {
        if(err) {
            res.send('');
        } else {
            people.name = req.body.name;
            people.email = req.body.email;

            people.save((err,user)=> {
                if(err) {
                    res.send('');
                } else {
                    res.send(people);
                }
            });
        }
    });
};

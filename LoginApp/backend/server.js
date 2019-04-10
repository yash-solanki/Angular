const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const cors = require('cors');
const bodyparser = require('body-parser');
const app= express();
const abc = require('./routes/routes');


// mongoose.connect("mongodb://localhost:27017/People", { useNewUrlParser: true });

// let People = mongoose.model("People", {
//     name: "String",
//     email: "String"
// });

app.use(bodyparser.json({type: 'application/json'}));
app.use(cors({
    origin: ['http://localhost:4200']
}));

app.use('/people', abc);


// app.get('/people',(req,res)=>{
//     People.find({},(err,people)=> {
//         if(err) {
//             res.send('Data Not Found');
//         } else {
//             res.send(people);
//         }
//     });
// });

// app.post('/people/adduser',(req,res)=> {
//     let people = new People();
//     people.name = req.body.name;
//     people.email=req.body.email;

//     people.save((err,user)=> {
//         if(err) {
//             res.send('');
//         } else {
//             res.send(user);
//         }
//     });
// });

// app.get('/people/:_id',(req,res) => {
//     People.findOne({_id:req.params._id}, (err,people)=> {
//         if(err) {
//             res.send('');
//         } else {
//             res.send(people);
//         }
//     });
// });

// app.delete('/people/deleteuser/:_id',(req,res)=> {
//     People.findOne({_id:req.params._id}, (err,people)=> {
//         if (err) {
//             res.send('');
//         } else {
//             people.remove();
//         }
//     });
// });

// app.put('/people/updateuser/:_id', (req,res) => {
//     People.findOne({_id:req.params._id}, (err,people) => {
//         if(err) {
//             res.send('');
//         } else {
//             people.name = req.body.name;
//             people.email = req.body.email;

//             people.save((err,user)=> {
//                 if(err) {
//                     res.send('');
//                 } else {
//                     res.send(people);
//                 }
//             });
//         }
//     });
// });

app.listen(3030,()=> {
    console.log("Login App Server Live On Port: 3030");
});
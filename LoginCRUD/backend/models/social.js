let mongo = require('mongoose');

mongo.connect('mongodb://127.0.0.1/yash',{ useNewUrlParser: true }, err => {
  if (err) {
      console.error(err);
  } else {
      console.log('Connected to Database 1233');
  }
});

let UserSchema=new mongo.Schema({
    email:{ 
      type:String
    },
    displayName: { 
        type:String
    }
});
module.exports = mongo.model('people', UserSchema, 'yash');
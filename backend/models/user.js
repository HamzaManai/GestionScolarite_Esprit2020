var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
    firstname: {
        type: String,
          default: ''
      },
      lastname: {
        type: String,
          default: ''
      },
      DateNaiss : {
        type: Date,
        default: ''

      },
      tlf : {
        type: Number,
        default: ''

      },
      email : {
        type: String,
          default: ''

      },
      role: {// 0: Admin 1: Student 2: Teacher 3: Exam Officer 4: Tution Agent 
        type: Number,
        default: 1
      },
      hod:{ //only if role is 2
        type: Boolean,
        default: false
    },
    admin:   {
        type: Boolean,
        default: false
    },
    dept: {//If teacher
      type: Schema.Types.ObjectId,
      ref: "department"
  },
    Teachcourses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "course"
}],
Studycourses: [{
  type: mongoose.Schema.Types.ObjectId,
  ref: "course"
}],
studClass:{
  type: Schema.Types.ObjectId,
  ref: "clas"
},
Teachclasses: [{
  type: mongoose.Schema.Types.ObjectId,
  ref: "course"
}],
hodComplaints: [{
  type: mongoose.Schema.Types.ObjectId,
  ref: "complaint"
}],
userComplaints: [{
  type: mongoose.Schema.Types.ObjectId,
  ref: "complaint"
}],

});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('user', User);
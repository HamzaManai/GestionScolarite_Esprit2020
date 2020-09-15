const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
var authenticate = require('../authenticate');


var User = require('../models/user');
var Department = require('../models/department')
var Course = require('../models/course')
const {ObjectId} = require('mongodb');
const department = require('../models/department');
const Complaint = require('../models/complaint');


let Clas = require('../models/class');

router.post('/create', (req, res, next) => {
  
    const classs = new Clas(
      {
        name: req.body.name
      });
      for(let gam of req.body.courses)
      {
        
       classs.courses.push(gam);
      }
      Clas.create(classs.save((err,data)=>
        {
        res.json('Course Registered');
        })
      )
      .catch(err => {
          res.send('error: ' + err)
      })
  });

  router.route('/enroll/:id').put((req, res, next) => {
    Clas.findByIdAndUpdate(req.params.id, {
    students: req.body.student
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})

router.route('/enroll/student/:id').put((req, res, next) => {
  User.findByIdAndUpdate(req.params.id, {
  $set: req.body
}, (error, data) => {
  if (error) {
    return next(error);
    console.log(error)
  } else {
    res.json(data)
    console.log('Data updated successfully')
  }
})
})

router.route('/getClass').get((req, res) => {
  Clas.find({})
   .populate('courses').populate('teachers').exec(function (err, results) {
    if (err) {
      console.log(err);
    } else 
    {
      res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
        console.log(results);
      res.json(results)
    }
  });
})

router.route('/getStudents').get((req, res) => {
  User.find({role:1,studClass:null})
   .populate('dept').exec(function (err, results) {
    if (err) {
      err = new Error('User ' + req.params.id + ' not found');
      err.status = 404;
      console.log("Teachers Error");
    } else 
    {
      res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
      res.json(results)
    }
  });
})


router.route('/getStudents/every').get((req, res) => {
  User.find({role:1})
   .populate('dept').exec(function (err, results) {
    if (err) {
      err = new Error('User ' + req.params.id + ' not found');
      err.status = 404;
      console.log("Teachers Error");
    } else 
    {
      res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
      res.json(results)
    }
  });
})

router.route('/user-profile').get(authenticate.verifyUser,(req, res, next) => {
//console.log("userid"+req.user._id)
User.findById(req.user._id)
.populate('studClass').populate('department').exec(function (err, results) {
 if (err) {
   err = new Error('User in /Profile ' + req.params.id + ' not found');
   err.status = 404;
   return next(err)
 } else 
 {
   res.statusCode = 200;
       res.setHeader('Content-Type', 'application/json');
     console.log("My "+results);
   res.json(results)
 }
});
 
})
router.route('/get/studs/:id').get((req, res, next) => {

  Clas.findById(req.params.id)
.populate('students').populate('courses').populate('teachers').exec(function (err, results) {
 if (err) {
   err = new Error('Class in /Profile ' + req.params.id + ' not found');
   err.status = 404;
   return next(err)
 } else 
 {
   res.statusCode = 200;
       res.setHeader('Content-Type', 'application/json');
     console.log(results);
   res.json(results)
 }
});
 
})

router.route('/enroll/teacher/:id').put((req, res, next) => {

  // Clas.teachers.push(req.body.teacher);
  // Clas.save();
  Clas.findByIdAndUpdate(req.params.id, {
   $push: { teachers: req.body.teacher  }
}, (error, data) => {
  if (error) {
    return next(error);
    console.log(error)
  } else {
    res.json(data)
    console.log('Data updated successfully')
  }
})
})

router.route('/teacher/update/:id').put((req, res, next) => {
  

  User.findByIdAndUpdate(req.params.id, {
  $set: req.body
}, (error, data) => {
  if (error) {
    return next(error);
    console.log(error)
  } else {
    res.json(data)
    console.log(data)
  }
})
})

router.route('/student/send/complaint/:id').post((req, res, next) => {
  
  var user1;
  var hods;


      
  User.findById(req.params.id)
 .exec(function (err, results) {
   if (err) {
     err = new Error('User ' + req.params.id + ' not found');
     err.status = 404;
     console.log("dsr");
     return next(err)
   } else 
   {


      user1=results._id;
  //   console.log(games[0].name);
  User.findOne({role:'2',hod:true})
     .then((hod1) => {
    hods=hod1._id;

    data2={
      details:req.body.details,
      student:user1,
      hod: hod1
    }


Complaint.create(data2, (error, data) => {
 if (error) {
   return next(error)
 } else 
 {
   console.log(data);
   res.json({
     user: results,
     hod: hod1,
     complaints:data

 });
 
 }
})

     }, (err) => next(err))
     .catch((err) => next(err));
   }
 });


})

router.route('/allComplaints').get((req, res, next) => {
  //console.log("userid"+req.user._id)
  Complaint.find({})
  .populate('student').populate('hod').exec(function (err, results) {
   if (err) {
     err = new Error('Complaints ' + req.params.id + ' not found');
     err.status = 404;
     return next(err)
   } else 
   {
     res.statusCode = 200;
         res.setHeader('Content-Type', 'application/json');
       console.log("My "+results);
     res.json(results)
   }
  });
   
  })

  router.route('/studentComplaints').get(authenticate.verifyUser,(req, res, next) => {
    //console.log("userid"+req.user._id)
    Complaint.find({student:req.user._id})
    .populate('student').populate('hod').exec(function (err, results) {
     if (err) {
       err = new Error('Complaints ' + req.params.id + ' not found');
       err.status = 404;
       return next(err)
     } else 
     {
       res.statusCode = 200;
           res.setHeader('Content-Type', 'application/json');
         console.log("My "+results);
       res.json(results)
     }
    });
     
    })

    router.route('/hod/resolve/:id').put((req, res, next) => {
      Complaint.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
        console.log(error)
      } else {
        res.json(data)
        console.log('Data updated successfully')
      }
    })
  })


  module.exports = router;

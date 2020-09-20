var express = require('express');
var router = express.Router();
var passport = require('passport');
const bodyParser = require('body-parser');
var authenticate = require('../authenticate');

var User = require('../models/user');
var Department = require('../models/department')
var Course = require('../models/course')
const {ObjectId} = require('mongodb');
const department = require('../models/department');
const user = require('../models/user');

router.use(bodyParser.json());

/* GET users listing. */
router.route('/').get((req, res) => {

  User.find({})
  .populate('games').exec(function (err, results) {
   if (err) {
     err.status = 404;
     return next(err)
   } else 
   {
     res.statusCode = 200;
         res.setHeader('Content-Type', 'application/json');
    //   console.log(results);
     res.json(results)
   }
 });
})

router.route('/getDept').get((req, res) => {
  Department.find({})
   .populate('teacher').exec(function (err, results) {
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



router.route('/getUsersByRole/:role').get((req, res) => {
  User.find({role:req.params.role})
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



router.route('/getAdmins').get((req, res) => {
  User.find({role:0})
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

router.route('/getCourses').get((req, res) => {
  Course.find({})
  .populate('teacher').exec(function (err, results) {
    if (err) {
      err = new Error('User ' + req.params.id + ' not found');
      err.status = 404;
      console.log("Teachers Error");
    } else 
    {
      res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          // console.log(results)
      res.json(results)
    }
  });
})

router.route('/user-profile').get(authenticate.verifyUser,(req, res, next) => {
  User.findById(req.user._id)
.populate('dept').exec(function (err, results) {
 if (err) {
   err = new Error('User in /Profile ' + req.params.id + ' not found');
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

router.route('/profile').get(authenticate.verifyUser,(req, res, next) => {
    User.findOne({
        _id: req.user._id
    })
        .then(user => {
            if (user){
                user.save((err,data)=>console.log("UserPresent"));
                res.json(user);
            }
            else
            {
                res.send("User does not exist")
            }
        })
        .catch(err => {
            res.json('error: ' + err)
        })
 
})


router.route('/user-profile/:id').get((req,res,next) => {
    User.findById(req.params.id)
     .populate('games').exec(function (err, results) {
      if (err) {
        err = new Error('User ' + req.params.id + ' not found');
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

// Update employee
router.route('/firsttime/:id').put((req, res, next) => {
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
router.route('/priority/:id').put((req, res, next) => {
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

//Create teacher
router.post('/signup', (req, res, next) => {

  User.register(new User({username: req.body.username}), 
    req.body.password, (err, user) => {
    if(err) {
      res.statusCode = 600;
      res.setHeader('Coreqntent-Type', 'application/json');
      res.json({err: err});
    }
    else {
      if (req.body.firstname)
        user.firstname = req.body.firstname;
      if (req.body.lastname)
        user.lastname = req.body.lastname;
        if(req.body.admin)
        user.admin=req.body.admin;
        if(req.body.DateNaiss)
        user.DateNaiss=req.body.DateNaiss;
        if(req.body.tlf)
        user.tlf=req.body.tlf;
        if(req.body.email)
        user.email=req.body.email;
        if(req.body.hod)
        user.hod=req.body.hod;
        user.role=req.body.role;
        if(req.body.dept)
        {
          user.dept = req.body.dept;
        }
      user.save((err, user) => {
        if (err) {
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.json({err: err});
          return ;
        }
        passport.authenticate('local')(req, res, () => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          

          res.json({success: true, status: 'Registration Successful!'});
        });
      });
    }
  });
});

router.post('/signup/student', (req, res, next) => {

  User.register(new User({username: req.body.username}), 
    req.body.password, (err, user) => {
    if(err) {
      res.statusCode = 600;
      res.setHeader('Coreqntent-Type', 'application/json');
      res.json({err: err});
    }
    else {
      if (req.body.firstname)
        user.firstname = req.body.firstname;
      if (req.body.lastname)
        user.lastname = req.body.lastname;
      if(req.body.admin)
          user.admin=req.body.admin;
      if(req.body.DateNaiss)
        user.DateNaiss=req.body.DateNaiss;
      if(req.body.tlf)
        user.tlf=req.body.tlf;
      if(req.body.email)
        user.email=req.body.email;
      user.role=req.body.role;
     

      user.save((err, user) => {
        if (err) {
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.json({err: err});
          return ;
        }
        passport.authenticate('local')(req, res, () => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          

          res.json({success: true, status: 'Registration Successful!'});
        });
      });
    }
  });
});

router.post('/HODSelect', (req, res, next) => {
  User.findByIdAndUpdate(req.body.teacher, {
    "hod": true
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      Department.findByIdAndUpdate(req.body.dept, {
        "teacher": req.body.teacher
      }, (error, data) => {
        if (error) {
          return next(error);
          console.log(error)
        } else {
          console.log('Department updated successfully')
        }
      })
      res.json(data)
      console.log('Teacher updated successfully')
    }
  })
});

router.post('/deptCreate', (req, res, next) => {
  const dept = new Department(
    {name: req.body.deptname,
    });
    Department.create(dept.save((err,data)=>
      {
      res.json('Department Registered');
      })
    )
    .catch(err => {
        res.send('error: ' + err)
    })
});

router.post('/courseCreate', (req, res, next) => {
  const course = new Course(
    {
      name: req.body.course,
      hourly_load: req.body.credHr,
      teacher: req.body.teacher
    });
    Course.create(course.save((err,data)=>
      {
      res.json('Course Registered');
      })
    )
    .catch(err => {
        res.send('error: ' + err)
    })
});

  //check in
  router.post("/user/:id/enter", async (req, res) => {
    // authenticate.verifyUser
    try {
      const data = {
        entry: Date.now()
      };
      const user= await User.findById(req.params.id);
  
      //if the user has an attendance array;
     
      if(user.attendance && user.attendance.length > 0){
      //for a new checkin attendance, the  checkin
      //must be at least 24hrs less than the new checkin time;
          const lastCheckIn = user.attendance[user.attendance.length - 1];
          const lastCheckInTimestamp = lastCheckIn.date.getTime();
            console.log(Date.now(), lastCheckInTimestamp);
          if (Date.now() < (lastCheckInTimestamp + 100)) {
            user.attendance.push(data);
            user.save((err, user) => {
              if (err) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.json({err: err});
                return ;
              }
              else{
                console.log("In 1st if");
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json({success: true, status: 'Attendance Successful!'});
              }
             
            });
     
            // res.json(data);
            res.redirect('/users/dashboard')
            
          } else {
            // res.statusCode = 500;

             var err = new Error('You are alreadyin attendance!');
            console.log("Erroewq!!");
            // next(err);
            err.status = 403;
           
       
             res.json({err: err});
            return ;
          
          }
      }else{
          user.attendance.push(data);
          user.save((err, user) => {
            if (err) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.json({err: err});
              res.redirect('/users/dashboard');
              return ;
            }
            else{
            
              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.json({success: true, status: 'Attendance Successful!'});
            }
           
          });
          
      }
    
    } catch (error) {
      console.log("something went wrong");
      console.log(error);
    }
  });

router.post('/login', passport.authenticate('local'), (req, res) => {
  var token = authenticate.getToken({_id: req.user._id});
  var responseAccount = {
    
  } 
    res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  User.findById(req.user._id).then(user => {
      responseAccount = {
      username: user.username,
      email: user.email,
      role: user.role,
      hod: user.hod,
      admin : user.admin
    } 

    res.json({success: true, token: token, status: 'You are successfully logged in!',
  user: responseAccount})
    }).catch(err => {
    console.log('ERROR', err)
    res.status(401).json({
      error: err
    });
  });

 console.log('hani fi wist', req.user._id);
  
});

router.route('/delete/:id').delete((req, res, next) => {
  User.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})


router.get('/logout', (req, res) => {
  if (req.session) {
    req.session.destroy();
    res.clearCookie('session-id');
    res.redirect('/');
  }
  else {
    var err = new Error('You are not logged in!');
    err.status = 403;
    next(err);
  }
});

module.exports = router;

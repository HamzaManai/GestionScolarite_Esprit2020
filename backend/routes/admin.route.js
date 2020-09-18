/*const express = require('express');
const app = express();
const adminRoute = express.Router();
const adminController = require('../controllers/admin.controller');


// adminRoute.post("/class/create",adminController.createClass);
adminRoute.post ("/class/create",function(req, res){
adminController.createClass
}); 




//adminRoute.get("/getClass",adminController.getClass);
adminRoute.get ("/getClass",function(req, res){
    adminController.getClass
    });


// Get All Employees
//adminRoute.get("/dept/get",adminController.getAllEmpl);
adminRoute.get ("/dept/get",function(req, res){
    adminController.getAllEmpl
    });
    


// Get single employee
//adminRoute.get('/dept/read/:id',adminController.getSingleEmpl) ;
adminRoute.get ("/dept/read/:id",function(req, res){
    adminController.getSingleEmpl
    });
    


// Update Dept
//adminRoute.put('/dept/update/:id',adminController.updEmpl) ; 
adminRoute.put( '/dept/update/:id',function(req, res,next){
    adminController.updEmpl
    });
    

// Delete DEpt
//adminRoute.delete('/dept/delete/:id',adminController.deltEmpl);
adminRoute.delete ("/dept/delete/:id",function(req, res,next){
    adminController.deltEmpl
    });


//Create Teachers
//adminRoute.post('/teacher/create',adminController.createTeach);
adminRoute.post ("/teacher/create",function(req, res){
    adminController.createTeach
    });


// Get All Employees
//adminRoute.get('/teacher/get',adminController.getAllTeach);
adminRoute.get ("/teacher/get",function(req, res){
    adminController.getAllTeach
    });


// Get single employee
//adminRoute.get('/teacher/read/:id',adminController.getTeach)
adminRoute.get ("/teacher/read/:id",function(req, res){
    adminController.getTeach
    });


// Update employee
//adminRoute.put('/teacher/update/:id', adminController.updTeach);
adminRoute.get ("/teacher/update/:id",function(req, res){
    adminController.updTeach
    });


// Delete employee
//adminRoute.delete('/teacher/delete/:id',adminController.deltTeach);
adminRoute.delete ("/teacher/delete/:id",function(req, res){
    adminController.deltTeach
    });

//adminRoute.post('/class/create',adminController.adminController.creatTeacher);

adminRoute.post ("/class/create",function(req, res){
    adminController.creatTeacher
    });





module.exports = adminRoute;*/

const express = require('express');
const app = express();
const adminRoute = express.Router();

// Employee model
let User = require('../models/user');
let Teacher = require('../models/teacher');
let Department = require('../models/department');
let Clas = require('../models/class');

adminRoute.post('/class/create', (req, res, next) => {
  
  const classs = new Clas(
    {
      name: req.body.name
   
    });

    if(req.body.course)
  {
 
    for(let gam of req.body.course)
    {
  
     classs.courses.push(gam);
    }
  }
    Clas.create(classs.save((err,data)=>
      {
        res.json(data)
      })
    )
    .catch(err => {
        res.send('error: ' + err)
    })
});

adminRoute.route('/getClass').get((req, res) => {
  Clas.find({})
   .populate('courses').exec(function (err, results) {
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


// Get All Employees
adminRoute.route('/dept/get').get((req, res) => {
    Department.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single employee
adminRoute.route('/dept/read/:id').get((req, res) => {
    Department.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update employee
adminRoute.route('/dept/update/:id').put((req, res, next) => {
    Department.findByIdAndUpdate(req.params.id, {
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

// Delete employee
adminRoute.route('/dept/delete/:id').delete((req, res, next) => {
  Department.find({_id:req.params.id}).deleteOne((err,data)=>
  {
    console.log("Department Removed")
    return res.json(data)
  })
})



adminRoute.route('/teacher/create').post((req, res, next) => {
    User.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Employees
adminRoute.route('/teacher/get').get((req, res) => {
  User.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single employee
adminRoute.route('/teacher/read/:id').get((req, res) => {
  User.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update employee
adminRoute.route('/teacher/update/:id').put((req, res, next) => {
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

// Delete employee
adminRoute.route('/teacher/delete/:id').delete( async (req, res, next) => {
    console.log(req.params.id)
   const deletedItem = await User.findOneAndDelete(req.params.id).catch(err => next(err))

  res.status(200).send("deletedItem")

})

adminRoute.route('/class/create').post((req, res, next) => {
  Teacher.create(req.body, (error, data) => {
  if (error) {
    return next(error)
  } else {
    res.json(data)
  }
})
});





module.exports = adminRoute;
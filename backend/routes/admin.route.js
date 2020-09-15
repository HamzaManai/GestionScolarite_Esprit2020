const express = require('express');
const app = express();
const adminRoute = express.Router();
const adminController = require('../controllers/admin.controller');
const { model } = require("../models/user");

// Employee model
let User = require('../models/user');
let Teacher = require('../models/teacher');
let Department = require('../models/department');
let Clas = require('../models/class');


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
    


// Update employee
//adminRoute.put('/dept/update/:id',adminController.updEmpl) ; 
adminRoute.put ("/dept/update/:id",function(req, res){
    adminController.updEmpl
    });
    

// Delete employee
//adminRoute.delete('/dept/delete/:id',adminController.deltEmpl);
adminRoute.delete ("/dept/delete/:id",function(req, res){
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





module.exports = adminRoute;
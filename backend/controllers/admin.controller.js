const { model } = require("../models/user");


// Employee model
let User = require('../models/user');
let Teacher = require('../models/teacher');
let Department = require('../models/department');
let Clas = require('../models/class');



model.exports={
    createClass : (req, res, next) => {
  
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
      } 
      ,
    getClass : (req, res) => {
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
      }
      ,
      getAllEmpl : (req, res) => {
        Department.find((error, data) => {
        if (error) {
          return next(error)
        } else {
          res.json(data)
        }
      })
    }
    ,
    getSingleEmpl : (req, res) => {
        Department.findById(req.params.id, (error, data) => {
        if (error) {
          return next(error)
        } else {
          res.json(data)
        }
      })
    }
    ,
    updEmpl : (req, res, next) => {
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
    }
    ,
    deltEmpl : (req, res, next) => {
        Department.find({_id:req.params.id}).deleteOne((err,data)=>
        {
          console.log("Department Removed")
          return res.json(data)
        })
      }
      ,
    createTeach : (req, res, next) => {
        User.create(req.body, (error, data) => {
        if (error) {
          return next(error)
        } else {
          res.json(data)
        }
      })
    }
    ,
    getAllTeach : (req, res) => {
        User.find((error, data) => {
          if (error) {
            return next(error)
          } else {
            res.json(data)
          }
        })
      }
      ,
      getTeach : (req, res) => {
        User.findById(req.params.id, (error, data) => {
          if (error) {
            return next(error)
          } else {
            res.json(data)
          }
        })
      }
      ,
      updTeach : (req, res, next) => {
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
      }
      ,
      deltTeach : (req, res, next) => {
        User.findOneAndRemove(req.params.id, (error, data) => {
          if (error) {
            return next(error);
          } else {
            res.status(200).json({
              msg: data
            })
          }
        })
      }
      ,
    creatTeacher : (req, res, next) => {
        Teacher.create(req.body, (error, data) => {
        if (error) {
          return next(error)
        } else {
          res.json(data)
        }
      })
      }






}
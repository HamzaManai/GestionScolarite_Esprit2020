
var express = require('express');
var router = express.Router();
const courseCtrl = require('../controllers/course');



/*Update Pack*/
router.put('/update/:id' , courseCtrl.updateCourse);

module.exports = router;

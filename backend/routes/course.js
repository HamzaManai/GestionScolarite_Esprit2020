
var express = require('express');
var router = express.Router();
const courseCtrl = require('../controllers/course');



/*Update Course*/
router.put('/update/:id' , courseCtrl.updateCourse);
// Update course state or tet or current progresse 
router.put('/updatestc/:id', courseCtrl.updateCoursestc);

/*delete*/
router.delete('/delete/:id',courseCtrl.deleteCourse);

module.exports = router;

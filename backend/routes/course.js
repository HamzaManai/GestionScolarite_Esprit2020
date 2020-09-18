
const courseCtrl = require('../controllers/course');

/*Update Pack*/
router.put('/update/:id' , courseCtrl.updateCourse);

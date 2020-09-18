
const courseCtrl = require('../controllers/course');

/*Update Pack*/
router.put('/update/:id', auth , courseCtrl.updateCourse);

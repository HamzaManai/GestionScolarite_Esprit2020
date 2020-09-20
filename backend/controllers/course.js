const Course = require('../models/course');


/*
Update Course 
*/

exports.updateCourse = (req, res, next) => {
	cr = new Object();
	console.log(req.body);

	if (req.body.name) { cr.name = req.body.name; }

	if (req.body.hourly_load) { cr.hourly_load = req.body.hourly_load; }

	if (req.body.state) { cr.state = req.body.state; }

	if (req.body.teacher) { cr.teacher = req.body.teacher; }

	if (req.body.classes) { cr.classes = req.body.classes; }


	console.log("new Course is :", cr);
	Course.updateOne({ _id: req.params.id }, cr).then(
		() => {
			res.status(201).json({
				message: 'Course updated !'
			});
		}
	).catch(
		(error) => {
			res.status(400).json({
				error: error
			});
		}
	);



}
/*
Delete Course
*/


exports.deleteCourse = (req, res, next) => {
	Course.deleteOne({ _id: req.params.id }).then(
		() => {

			res.status(201).json({
				message: 'Course Deleted !'
			});
		}
	).catch(
		(error) => {
			res.status(400).json({
				error: error
			});
		}
	);
}

// Update course state or tet or current progresse 
exports.updateCoursestc = (req, res, next) => {
	course = new Object();


	if (req.body.current_Progress)
		course.current_Progress = req.body.current_Progress;

	if (req.body.test)
		course.test = req.body.test;

	if (req.body.state)
		course.state = req.body.state;

	if (req.body.payement)
		course.payement = req.body.payement;

	console.log("new course is :", course);
	Course.updateOne({ _id: req.params.id }, course).then(
		() => {
			res.status(201).json({
				message: 'Course updated !'
			});
		}
	).catch(
		(error) => {
			res.status(400).json({
				error: error
			});
		}
	);
}

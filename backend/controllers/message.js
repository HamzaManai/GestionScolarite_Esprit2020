
const Message = require('../models/message');

/**create Message */
exports.createMessage = (req, res, next) => {
	req.body.created_at = Date.now();

	var message = new Message(req.body);
	message.save().then(data => {
		return res.status(201).json({ success: true, msg: 'Successful created new Message', message: data });  //creation successfull
	}).catch(err => {
		console.log(err)
		return res.status(403).json({ err: err });
	});


}



/** Get All Message */
exports.getAll = (req, res, next) => {
	Message.find().then(messages => {
		res.send(messages);
	}).catch(err => {
		console.log('ERROR', err)
		res.status(401).json({
			error: err
		});
	})
}

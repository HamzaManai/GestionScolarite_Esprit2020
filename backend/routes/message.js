
var express = require('express');
var router = express.Router();
const messageCtrl = require('../controllers/message');



/*create Message */
router.post('/add' , messageCtrl.createMessage);
// get All messages
router.get('/getAllMessages', messageCtrl.getAll);

module.exports = router;

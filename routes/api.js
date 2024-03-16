var express = require('express');
var router = express.Router();

var bookController = require('./../controllers/book')
var userController = require('./../controllers/user')
var authController = require('./../controllers/auth.js');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/login', authController.login);
router.get('/isbn', bookController.info);
router.post('/user', userController.insert);
router.put('/user', userController.update);
router.delete('/user', userController.delete);



module.exports = router;

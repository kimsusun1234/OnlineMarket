const express = require('express');
const UsersModel = require('../models/users.model');
const router = express.Router();
const userController = require('../controllers/users.controller');

//khai bao body parser de doc request
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended: false});

router.get('/', (req, res) =>{

    res.render('newaccountdemo');

})

router.post('/insertUserDemo', urlencodedParser, (req, res) => {

    userController.insertUser(req, res);

});

module.exports = router;

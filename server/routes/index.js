const express = require('express');
const ValidationController = require('../controller/valController');
const validation = require('../validationsMiddleware/validateSchema');
// const schema = require('../validationsSchema/schema');
const userSchema = require('./validationsSchema/schema');

//create router 
const router = express.Router();

router.post('/validate', validation(userSchema), ValidationController.passRequest);

module.exports = router;
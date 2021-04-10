const express = require('express');
const devController = require('../controller/dev');
const validation = require('../validationsMiddleware/validateSchema');
const schema = require('../validationsSchema/schema');

const router = express.Router();

router.post('/dev', validation(schema) ,devController.createDev);

module.exports = router;
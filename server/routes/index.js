const express = require('express');
const ValidationController = require('../controller/dev');
const validation = require('../validationsMiddleware/validateSchema');
const schema = require('../validationsSchema/schema');

const router = express.Router();

router.post('/validate', validation(schema), ValidationController.passRequest);

module.exports = router;
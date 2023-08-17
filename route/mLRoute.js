const express = require('express')
const {sleepModel, heartModel, kidneyModel} = require('../controller/mlModelController')
const router = express.Router();
router.route('/sleepModel').post(sleepModel);
router.route('/heartModel').post(heartModel);
router.route('/kidneyModel').post(kidneyModel);


module.exports = router
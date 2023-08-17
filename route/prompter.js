const express = require('express')
const {generatePrompt} = require('../controller/promptController')
const router = express.Router();
router.route('/generate').post(generatePrompt);


module.exports = router
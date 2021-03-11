const express = require('express')
const router = express.Router()
const messageMid = require('../controllers/message')

router.post('/add-message', messageMid.addMessage)
router.post('/get-all-message', messageMid.getAllMessages)

module.exports = router;

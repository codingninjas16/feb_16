const express = require('express');
const { createUser, updateUser } = require('./userController');
const router = express.Router();

router.post('/',createUser);
router.put("/:userId",updateUser);

module.exports = router;
const express = require('express');
const router = express.Router();

const user = require('./api/module/user/userRouter/userRouter')

router.use('/user', user);

module.exports = router;
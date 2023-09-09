const express = require('express');
const router = express.Router();

router.post('/register',(req,res)=>{
    return res.send('doctor register');
});

module.exports = router;

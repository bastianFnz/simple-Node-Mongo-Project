const express = require('express');
const router = express.Router()
const path = require('path');

router.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname,'../src/html','index.html'))
})

router.get('/employ',(req,res)=>{
  res.sendFile(path.join(__dirname,'../src/html','employ.html'))
})

module.exports = router;

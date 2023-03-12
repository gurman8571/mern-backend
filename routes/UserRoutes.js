const {AddUser}=require('../Controllers/UserController')
const {GetUser}=require('../Controllers/UserController')
const express=require('express');
const router=express.Router();


router.get('/users',GetUser);
router.post('/add',AddUser)

module.exports=router;
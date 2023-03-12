const User=require('../models/UserModel')
var nodemailer=require('nodemailer')
const dotenv=require('dotenv')
const asyncHandler=require('express-async-handler')

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    }
  });

const AddUser=async(req,res)=>{
    //es.send(req.body)
const {name,phone,email,dob}=req.body;
//phone validation
if (!phone) {
    res.status(400).send({error:'Phone number neded on server'})
    return;
}
else{
const user= await User.create({
    name,
    phone,
    email,
    dob
})
if (user) {
    res.status(200).send({

        data:{
            _id:user._id,
            name:user.name,
            phone:user.phone,
            email:user.email,
            dob:user.dob
        }
    })

    var mailOptions={
        from:process.env.MAIL_USERNAME,
        to:user.email,
        subject: 'Welcome to our website',
        text:'You have entered your details'
        
    
    }

    transporter.sendMail(mailOptions,function name(error,info) {
if (error) {
    console.log(error);
    //console.log(process.env.MAIL_USERNAME);
}        
else{
    console.log(`emailsent ${info.response}`);
}
    })
}
}
}

const GetUser=asyncHandler(async(req,res)=>{
    try {
        const data=await User.find({});
        res.status(200)
        //console.log(data);
        res.json(data)
    } catch (error) {
     throw new Error(error.message);
    }
   
    })

module.exports ={GetUser,AddUser}
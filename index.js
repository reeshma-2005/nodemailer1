//const express=require('express');
//const app=new express();
const nodemailer=require('nodemailer');

let mailTransporter=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"cskipl220@gmail.com",
        pass:"rcihcayjsuvjxxho"
    }
})

let details={
    from:"cskipl220@gmail.com",
    to:"reeshmasreenath81@gmail.com",
    subject:"Testing nodemailer",
    text:"Testing out first sender"
}

mailTransporter.sendMail(details,(err,info)=>{
    if(err){
        console.log("It has an error",err);
    }
    else{
       console.log("Email sent successfully"+info.response);
    }
})
 
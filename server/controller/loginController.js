const express = require("express")
const loginModal = require("../modal/loginModal")

module.exports.login = async (req,res,next)=>{
    const username = req.body.username
    const password = req.body.password

    const data = await loginModal.login(username,password)

    if(data.length>0){
        res.status(200).json({message : "user login successful"})
    }
    else{
        res.status(400).json({message : "username or password invalid"})
    }


}
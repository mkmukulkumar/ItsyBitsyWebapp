const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const bcrypt= require('bcryptjs')
const authenticate =require("../middleware/authenticate")

require('../db/conn')
const User = require('../model/userSchema')


// const middleware = (req, res, next) =>{
    
//    console.log("HII")
//    next()
// }


router.post("/signup",async (req,res)=>{

    const {name, email, password, cpassword} = req.body
    if(!name || !email || !password || !cpassword){
        return res.status(422).json({error:"Details Empty"})
    }

    try{
        const userExist=await User.findOne({email:email})
        if(userExist){
            return res.status(422).json({error:"Email already exist"});
        }else if(password != cpassword){
            return res.status(422).json({error:"Password dont match"})
        }else{
            const user=new User({name, email, password, cpassword})   
            await user.save()
            res.status(201).json({message:"user registered successfully"})

        }
      
       
    } catch(err){
        console.log(err)
    }
        // console.log(name)
        // res.json({message:req.body})
})

router.post('/login', async (req, res) => {
    // console.log(req.body)
    // res.json({message:"Awesome"})
    try{
        let token;
        const {email , password}=req.body
        if(! email || !password){
            return res.status(400).json({error:"Details Empty"})
        }
        
        const userLogin = await User.findOne({email:email})

        // console.log(userLogin)
        if(userLogin){
            const isMatch = await bcrypt.compare(password, userLogin.password)      
            
            token = await userLogin.generateAuthToken()
            // console.log(token)
            
            res.cookie("jwtoken",token,{
                expires:new Date(Date.now()+25892000000),
                httpOnly:true
            })

            if(!isMatch){
                res.status(400).json({message:"Invalid Credentials"})
            } else{
                res.json({message:"user signin successfully"})
            }
        }
        else{
            res.status(400).json({message:"Invalid Credentials"})
        }    
    } catch(err){
        console.log(err)
    }
})



router.get("/", authenticate, (req, res) => {
    res.send(req.rootUser);
})


// router.get('/notifications', (req, res) => {
// res.send('Hello notifications World!')
// })
  


module.exports=router
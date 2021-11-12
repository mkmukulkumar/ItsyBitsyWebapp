const express = require('express')
const router = express.Router()
const bcrypt= require('bcryptjs')
require('../db/conn')
const User = require('../model/userSchema')

const middleware=(req,res,next) => {
    console.log('hello my middleware');
   
    next();
  }

router.get('/', (req, res) => {
    res.send('Hello World from server routerjs!')
})

router.post('/register',async (req,res)=>{

    const {name, email, password, cpassword} = req.body
    if(!name || !email || !password || !cpassword){
        return res.status(422).json({error:"Plz fill All the details"})
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

router.post('/signin', async (req, res) => {
    // console.log(req.body)
    // res.json({message:"Awesome"})
    try{
        const {email , password}=req.body
        if(! email || !password){
            return res.status(400).json({error:"Plz fill the data"})
        }
        
        const userLogin = await User.findOne({email:email})

        // console.log(userLogin)
        if(userLogin){
            const isMatch = await bcrypt.compare(password, userLogin.password)      
            
            
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


router.get('/login',middleware, (req, res) => {
    res.send('Hello login World!')
})

router.get('/signup', (req, res) => {
res.send('Hello signup World!')
})

router.get('/Holdings', (req, res) => {
res.send('Hello holdings World!')
})

router.get('/News', (req, res) => {
res.send('Hello news World!')
})

router.get('/Notifications', (req, res) => {
res.send('Hello notifications World!')
})
  


module.exports=router
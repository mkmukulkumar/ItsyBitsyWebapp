const express = require('express')
const router = express.Router()
require('../db/conn')
const User = require('../model/userSchema')

const middleware=(req,res,next) => {
    console.log('hello my middleware');
   
    next();
  }

router.get('/', (req, res) => {
    res.send('Hello World from server routerjs!')
})

router.post('/register',(req,res)=>{

    const {name, email, password, cpassword} = req.body
    if(!name || !email || !password || !cpassword){
        return res.status(422).json()
    }

    User.findOne({email:email})
        .then((userExist)=>{
            if(userExist){
                return res.status(422).json({error:"Email already exist"});
            }

            const user=new User({name, email, password, cpassword})
            
            user.save().then(()=>{
                res.status(201).json({message:"user registered successfully"})
            }).catch((err) => res.status(500).json({error:"failed to registered"}))
        }).catch(err=>{console.log(err)})
        // console.log(name)
        // res.json({message:req.body})
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
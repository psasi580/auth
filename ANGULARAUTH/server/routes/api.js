const express=require('express')
const router=express.Router()
const jwt=require('jsonwebtoken')
 const User=require('../models/user')
const mongoose=require('mongoose')

const db= "mongodb://localhost:27017/event" 
mongoose.connect(db,err=>{
    if(err){
        console.error("error"+err)
    }
    else{
        console.log('connection mongoose')
    }
})
router.get('/', (req,res)=>{
    res.send("send routeApi")

})
router.post('/register', (req,res)=>{
    let userdata=req.body
    console.log(userdata)
    let user=new User(userdata)
    user.save((error,registeredUser)=>{
        if(error){
            console.log(error)
        }else{
            console.log(registeredUser)
            let paylode={subject:registeredUser._id}
            let token=jwt.sign(paylode,'secretkey')

            res.status(200).send({token});
        }

    })
})
router.post('/login', (req,res)=>{
    let userdata=req.body
    User.findOne({email:userdata.email},(error,user)=>{
        if(error){
            console.log(error)
        }
        else{
            if(!user){
                res.status(401).send("invalid email")
            }
            else{
                if(user.password!==userdata.password){
                    res.status(401).send("invalid email")
                }else{
                    let paylode={subject:user._id}
                    let token=jwt.sign(paylode,'secretkey')
                    res.status(200).send({token}) 
                }
            }
        }
    })
})
router.get('/events',(req,res)=>{
    let events = [
        {
          "_id": "1",
          "name": "Auto Expo",
          "description": "lorem ipsum",
          "date": "2012-04-23T18:25:43.511Z"
        },
        {
          "_id": "2",
          "name": "Auto Expo",
          "description": "lorem ipsum",
          "date": "2012-04-23T18:25:43.511Z"
        },
        {
          "_id": "3",
          "name": "Auto Expo",
          "description": "lorem ipsum",
          "date": "2012-04-23T18:25:43.511Z"
        },
        {
          "_id": "4",
          "name": "Auto Expo",
          "description": "lorem ipsum",
          "date": "2012-04-23T18:25:43.511Z"
        },
        {
          "_id": "5",
          "name": "Auto Expo",
          "description": "lorem ipsum",
          "date": "2012-04-23T18:25:43.511Z"
        },
        {
          "_id": "6",
          "name": "Auto Expo",
          "description": "lorem ipsum",
          "date": "2012-04-23T18:25:43.511Z"
        }
      ]
    res.json(events)
})
// function verifyToken(req, res, next) {
//     console.log(req.headers.authorization);
//     if(!req.headers.authorization) {
//       return res.status(401).send('Unauthorized request')
//     }
//     let token = req.headers.authorization.split(' ')[1]
//     if(token === 'null') {
//       return res.status(401).send('Unauthorized request')    
//     }
//     let payload = jwt.verify(token, 'secretKey')
//     if(!payload) {
//       return res.status(401).send('Unauthorized request')    
//     }
//     req.userId = payload.subject
//     console.log(req.userId )
//     next()
//   }
  
router.get('/special',(req,res)=>{
    let events = [
        {
          "_id": "1",
          "name": "Auto Expo",
          "description": "lorem ipsum",
          "date": "2012-04-23T18:25:43.511Z"
        },
        {
          "_id": "2",
          "name": "Auto Expo",
          "description": "lorem ipsum",
          "date": "2012-04-23T18:25:43.511Z"
        },
        {
          "_id": "3",
          "name": "Auto Expo",
          "description": "lorem ipsum",
          "date": "2012-04-23T18:25:43.511Z"
        },
        {
          "_id": "4",
          "name": "Auto Expo",
          "description": "lorem ipsum",
          "date": "2012-04-23T18:25:43.511Z"
        },
        {
          "_id": "5",
          "name": "Auto Expo",
          "description": "lorem ipsum",
          "date": "2012-04-23T18:25:43.511Z"
        },
        {
          "_id": "6",
          "name": "Auto Expo",
          "description": "lorem ipsum",
          "date": "2012-04-23T18:25:43.511Z"
        }
      ]
    res.json(events)
})
module.exports=router;


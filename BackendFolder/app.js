const express = require('express')
const app = express()

const mongoose = require('mongoose')

const User = require('./model/users')

const cors = require('cors')

//middleware
app.use(cors())
app.use(express.urlencoded({ extended: false}))
app.use(express.json())
//connect to database

const db_url = 'mongodb://localhost:27017/users'
mongoose.connect(db_url).then(()=>{
        console.log('Connection Established');
})


//checking for data present in database or not in Login Page.
app.post('/login',(req,res)=>{
    User.findOne({email:req.body.email}).then((userData)=>{
        if (userData) {
            if (req.body.password === userData.password) {
                res.send({message:'login successfull', status:200})
            } else {
                res.send({message: 'please enter valid password'})
            }
        }else {
            res.send({message: 'user not found'})
        }
    
    })
})


//adding data into database from Frontend for Register Form.
app.post('/register',async(req,res)=>{
    User.findOne({email:req.body.email}).then((userData)=>{
        if (userData) {
            // display error message
            res.send({message:'User Already Exists'})
            
        } else {
            // add the data into database
            let userData = new User({
                name:req.body.name,
                email:req.body.email,
                password:req.body.pass
            })
            userData.save().then(()=>{
                res.send({message:'User  registered successfully '})
            }).catch(()=>{
                res.send({message:'user registration failed. Try after sometime'})
            })
            
        }
    })
})

app.listen(4000,()=>{
    console.log('Server Running at port 4000');
})
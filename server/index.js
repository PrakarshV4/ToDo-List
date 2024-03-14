const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const {User} = require('./Schema/schema');
const {JWTSecret} = require('./config');

const cors = require('cors');
const userMiddleware  = require('./userMiddleware');
const app = express();

app.use(express.json());
app.use(cors());
mongoose.connect('mongodb+srv://prakarsh1248:prakarsh1248verma@cluster0.oaijoov.mongodb.net/TodoList')
.then(()=>{
    console.log('Connected to MongoDB');
}).catch(err => console.log("Error connecting to MongoDB"))


//Signup
app.post('/signup',async (req,res)=>{
    const {name,email,password} = req.body;
    const exists = await User.findOne({name,email,password});
    if(exists){
        res.json({msg: "User already exists",success: 'false'});
    }else{
        await User.create({
            name,
            email,
            password
        })
        res.status(200).json({msg: "User created",success:'true' });
    }
})

//Login
app.post('/login',async (req,res)=>{
    const {email,password} = req.body;
    const user = await User.findOne({email,password});
    if(user){
        console.log("User = " + user);
        const token = jwt.sign({name: user.name, email:user.email},JWTSecret);
        res.json({token ,msg: "User existing", success:'true'});
    }else{
        res.json({msg: "User not found" , success: 'false'});
    }
})
//Todo
app.post('/todo',userMiddleware,async(req, res) => {
    console.log('after userMiddleware')
    const email = req.email;
    const createPayload = req.body.task;
    console.log('createPayload = ' + createPayload);
    //input validation afterwards

    //add todo to mongoDB
    const user = await User.findOne({email: email});  
    user.task.push(createPayload);
    await user.save({
        validateBeforeSave: false,
    });
    res.json({task:user.task});
})
//View all todos
app.get('/getTodos',userMiddleware,async (req,res)=>{
    const email = req.email;
    User.findOne({email: email})
    .then((user)=>{
        res.json(user.task);
    }).catch((err)=>{
        console.log(err);
    })
})

app.put('/removeTodos',userMiddleware,async (req,res)=>{
    const email = req.email;
    User.findOne({email: email})
    .then()
})

app.listen(3000,()=>{
    console.log('Server listening on port 3000');
})
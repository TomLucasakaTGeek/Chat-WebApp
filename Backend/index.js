const express = require('express')
const cors = require('cors');
const { connectDB } = require('./.config/db');
const { userModel } = require('./models/data');
const app = express();
require("dotenv").config();
app.use(express.json())

app.get('/', (req, res)=>{
    res.send("Welcome to Express App")
})

app.post('/signup', async (req, res)=>{
    let {name, email} = req.body
    try {

        res.status(200).send("User Data created succesfully")
    } catch (error) {
        console.log(error)
    }
})

app.post('/login', async (req, res)=>{
    let email = req.body;
    try {
        if(email) {
            
            res.status(200).send({"message":"Logged in Successfully"})
        }
        else {
            res.status(403).send({"message": "User not Found"})
        }
    } catch (error) {
        console.log(error)
    }
})

app.listen(process.env.PORT, async(req, res)=>{
    try {
        await connectDB
        console.log("Connected with DB")
    } catch (error) {
        console.log(error)
    }
    console.log(`Server is running on port ${process.env.PORT}`)
}) 


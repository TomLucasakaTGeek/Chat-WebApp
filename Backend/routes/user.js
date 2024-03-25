const express = require('express');
const router = express.Router();

router.post('/signup', async (req, res)=>{
    let {name, email} = req.body
    try {

        res.status(200).send("User Data created succesfully")
    } catch (error) {
        console.log(error)
    }
})

router.post('/login', async (req, res)=>{
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

module.exports = router;
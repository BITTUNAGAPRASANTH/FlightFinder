const router = require("express").Router();

const User = require("../models/User");

const bcrypt = require("bcrypt");


// Register User

router.post("/register", async (req,res)=>{

try{

// Check if email exists

const existingUser = await User.findOne({
email:req.body.email
});

if(existingUser){

return res.status(400).send("Email Already Exists");

}


// Hash password

const hashed = await bcrypt.hash(req.body.password,10);


// Create user

const user = new User({

name:req.body.name,

email:req.body.email,

password:hashed,

role:req.body.role || "user"

});

await user.save();

res.send(user);

}

catch(err){

console.log(err);

res.status(500).send("Registration Failed");

}

});


// Login User

router.post("/login", async(req,res)=>{

try{

const user = await User.findOne({
email:req.body.email
});

if(!user){

return res.status(400).send("User Not Found");

}

const match = await bcrypt.compare(
req.body.password,
user.password
);

if(!match){

return res.status(400).send("Wrong Password");

}

res.send(user);

}

catch(err){

res.status(500).send("Login Error");

}

});


// Get All Users

router.get("/all", async(req,res)=>{

const users = await User.find();

res.send(users);

});


module.exports = router;
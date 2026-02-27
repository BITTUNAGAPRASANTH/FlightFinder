const router = require("express").Router();

const Flight = require("../models/flight");


// Add Flight (Admin)

router.post("/add", async (req,res)=>{

try{

const flight = new Flight(req.body);

await flight.save();

res.send("Flight Added");

}

catch(err){

res.status(500).send("Error Adding Flight");

}

});



// Search Flights

router.post("/search", async (req,res)=>{

try{

const flights = await Flight.find({

from: req.body.from,
to: req.body.to,
date: req.body.date

});

res.send(flights);

}

catch(err){

res.status(500).send("Search Error");

}

});



// Get All Flights

router.get("/all", async (req,res)=>{

const flights = await Flight.find();

res.send(flights);

});



// Update Flight

router.put("/update/:id", async (req,res)=>{

await Flight.findByIdAndUpdate(

req.params.id,
req.body

);

res.send("Updated");

});


module.exports = router;
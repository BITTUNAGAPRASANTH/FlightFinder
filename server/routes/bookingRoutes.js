const router=require("express").Router();

const Booking=require("../models/booking");


// Book Flight

router.post("/book",async(req,res)=>{

const booking=new Booking(req.body);

await booking.save();

res.send("Booked");

});


// Get Bookings

router.get("/all",async(req,res)=>{

const bookings=await Booking.find();

res.send(bookings);

});


// Cancel Booking

router.delete("/:id",async(req,res)=>{

await Booking.findByIdAndDelete(

req.params.id

);

res.send("Cancelled");

});

module.exports=router;
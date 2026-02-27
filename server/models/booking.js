const mongoose=require("mongoose");

const BookingSchema=new mongoose.Schema({

userId:String,

flightId:String,

seat:String,

status:String

});

module.exports=mongoose.model("Booking",BookingSchema);
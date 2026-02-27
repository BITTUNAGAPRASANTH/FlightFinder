const mongoose=require("mongoose");

const FlightSchema=new mongoose.Schema({

airline:String,

from:String,

to:String,

date:String,

price:Number,

seats:Number

});

module.exports=mongoose.model("Flight",FlightSchema);
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB

mongoose.connect(
"mongodb+srv://myAtlasDBUser:NAGAPRASANTH1234@myatlasclusteredu.evxbhrp.mongodb.net/FlightFinder?retryWrites=true&w=majority"
)
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));


// Routes

app.use("/users",require("./routes/userRoutes"));
app.use("/flights",require("./routes/flightRoutes"));
app.use("/booking",require("./routes/bookingRoutes"));


// Start Server

app.listen(3000,()=>{

console.log("Server Running");

});
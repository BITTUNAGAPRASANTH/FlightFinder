import React,{useState} from "react";
import API from "../services/api";

function AddFlight(){

const [airline,setAirline]=useState("");
const [from,setFrom]=useState("");
const [to,setTo]=useState("");
const [date,setDate]=useState("");
const [price,setPrice]=useState("");

const addFlight=async()=>{

await API.post("/flights/add",{

airline,
from,
to,
date,
price

});

alert("Flight Added");

}

return(

<div className="container">

<h2>Add Flight</h2>

<input className="form-control" placeholder="Airline"
onChange={(e)=>setAirline(e.target.value)}/>

<br/>

<input className="form-control" placeholder="From"
onChange={(e)=>setFrom(e.target.value)}/>

<br/>

<input className="form-control" placeholder="To"
onChange={(e)=>setTo(e.target.value)}/>

<br/>

<input type="date"
className="form-control"
onChange={(e)=>setDate(e.target.value)}/>

<br/>

<input className="form-control" placeholder="Price"
onChange={(e)=>setPrice(e.target.value)}/>

<br/>

<button className="btn btn-primary"
onClick={addFlight}>
Add Flight
</button>

</div>

)

}

export default AddFlight;
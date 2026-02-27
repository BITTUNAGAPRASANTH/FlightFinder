
import React,{useEffect,useState} from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";

function MyBookings(){

const [bookings,setBookings]=useState([]);

useEffect(()=>{
loadBookings();
},[]);

const loadBookings=async()=>{

const res=await API.get("/booking/all");

setBookings(res.data);

}

const cancelBooking=async(id)=>{

await API.delete("/booking/"+id);

loadBookings();

}

return(

<div className="container">

<h2>My Bookings</h2>

{

bookings.map(b=>(

<div className="card p-3 mt-2">

Seat: {b.seat}

<br/>

<button
className="btn btn-danger"
onClick={()=>cancelBooking(b._id)}
>

Cancel

</button>

</div>

))

}

</div>

)

}

export default MyBookings;
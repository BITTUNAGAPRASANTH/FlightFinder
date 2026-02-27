import React,{useEffect,useState} from "react";
import API from "../services/api";
import AdminNavbar from "../components/AdminNavbar";
import {useNavigate} from "react-router-dom";

function AdminHome(){

const navigate = useNavigate();

const [flights,setFlights]=useState([]);
const [users,setUsers]=useState([]);
const [bookings,setBookings]=useState([]);

useEffect(()=>{

loadData();

},[]);


const loadData=async()=>{

setFlights((await API.get("/flights/all")).data);

setUsers((await API.get("/users/all")).data);

setBookings((await API.get("/booking/all")).data);

}


// Delete Flight

const deleteFlight = async(id)=>{

await API.delete("/flights/delete/"+id);

alert("Flight Deleted");

loadData();

}


return(

<div>

<AdminNavbar/>

<div className="container mt-4">

<h2>Admin Dashboard</h2>


<br/>


{/* Buttons */}





<br/><br/>


<h3>Flights</h3>

{

flights.map(f=>(

<div
key={f._id}
className="card p-3 mb-2"
>

<b>{f.airline}</b>

<br/>

{f.from} → {f.to}

<br/>

Date: {f.date}

<br/>

Price: ₹{f.price}

<br/><br/>


<button
className="btn btn-danger"
onClick={()=>deleteFlight(f._id)}
>

Delete Flight

</button>


</div>

))

}


<br/>


<h3>Users</h3>

{

users.map(u=>(

<div key={u._id}>

{u.name}

</div>

))

}


<br/>


<h3>Bookings</h3>

{

bookings.map(b=>(

<div key={b._id}>

Seat {b.seat}

</div>

))

}


</div>

</div>

)

}

export default AdminHome;
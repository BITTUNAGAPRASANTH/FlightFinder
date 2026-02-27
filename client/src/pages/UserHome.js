import React from "react";
import Navbar from "../components/Navbar";

function UserHome(){

return(

<div>

<Navbar/>

<div className="container mt-5">

<h2>Welcome User ✈️</h2>

<p>

Search and book flights easily using FlightFinder.

</p>

<br/>

<h4>Available Options:</h4>

<ul>

<li>Search Flights</li>

<li>Book Flights</li>

<li>Cancel Bookings</li>

</ul>

</div>

</div>

)

}

export default UserHome;
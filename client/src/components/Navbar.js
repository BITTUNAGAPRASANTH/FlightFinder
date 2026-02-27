import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {

return (

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">

<div className="container">

<Link className="navbar-brand" to="/user">

FlightFinder ✈️

</Link>


<div>

<Link
className="btn btn-light m-1"
to="/user"
>

Home

</Link>


<Link
className="btn btn-light m-1"
to="/search"
>

Search Flights

</Link>


<Link
className="btn btn-light m-1"
to="/bookings"
>

My Bookings

</Link>


<Link
className="btn btn-danger m-1"
to="/"
>

Logout

</Link>

</div>

</div>

</nav>

)

}

export default Navbar;
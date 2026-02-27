import React from "react";
import {useNavigate} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Home.css";

function Home(){

const navigate = useNavigate();

const goToLogin = ()=>{

navigate("/login");

}

const goToRegister = ()=>{

navigate("/register");

}

const goToSearch = ()=>{

navigate("/search");

}

return(

<div>


{/* NAVBAR */}

<nav className="navbar navbar-dark bg-dark">

<div className="container">

<span className="navbar-brand">

FlightFinder ✈️

</span>


<div>

<button
className="btn btn-light m-1"
onClick={goToLogin} target="self"
>

Login

</button>


<button
className="btn btn-primary m-1"
onClick={goToRegister}
>

Register

</button>

</div>

</div>

</nav>


{/* HERO */}

<div className="bg-dark text-white text-center p-5">

<h1>

Find & Book Flights ✈️

</h1>

<p>

Search flights and travel easily.

</p>

</div>


{/* SEARCH */}

<div className="container mt-5">

<h3>Search Flights</h3>

<div className="row">

<div className="col-md-3">

<input
className="form-control"
placeholder="From"
/>

</div>

<div className="col-md-3">

<input
className="form-control"
placeholder="To"
/>

</div>

<div className="col-md-3">

<input
type="date"
className="form-control"
/>

</div>

<div className="col-md-3">

<button
className="btn btn-success w-100"
onClick={goToLogin}
>

Search

</button>

</div>

</div>

</div>


{/* FEATURES */}

<div className="container mt-5">

<h3 className="text-center">

Why FlightFinder?

</h3>

<div className="row mt-4 text-center">

<div className="col-md-4">

<h5>🔍 Easy Search</h5>

<p>

Search flights quickly.

</p>

</div>

<div className="col-md-4">

<h5>🎫 Fast Booking</h5>

<p>

Book flights instantly.

</p>

</div>

<div className="col-md-4">

<h5>❌ Cancel Anytime</h5>

<p>

Cancel bookings easily.

</p>

</div>

</div>

</div>


{/* FOOTER */}

<div className="bg-dark text-white text-center p-3 mt-5">

FlightFinder © 2026

</div>


</div>

)

}

export default Home;
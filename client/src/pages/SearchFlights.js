import React,{useState} from "react";
import API from "../services/api";
import BookingModal from "../components/BookingModal";
import Navbar from "../components/Navbar";
import "../styles/search.css";

function SearchFlights(){

const [from,setFrom]=useState("");
const [to,setTo]=useState("");
const [date,setDate]=useState("");

const [flights,setFlights]=useState([]);
const [selected,setSelected]=useState(null);
const [searched,setSearched]=useState(false);


// Search Flights

const searchFlights = async()=>{

const res = await API.post("/flights/search",{

from,
to,
date

});

setFlights(res.data);

setSearched(true);

};


return(

<div>

<Navbar/>

<div className="search-container">

<h2 className="search-title">

Search Flights ✈️

</h2>


<input
placeholder="Departure City"
className="form-control search-input"
onChange={(e)=>setFrom(e.target.value)}
/>


<input
placeholder="Destination"
className="form-control search-input"
onChange={(e)=>setTo(e.target.value)}
/>


<input
type="date"
className="form-control search-input"
onChange={(e)=>setDate(e.target.value)}
/>


<button
className="btn btn-primary search-btn"
onClick={searchFlights}
>

Search Flights

</button>


<hr/>


{/* No Flights Found */}

{searched && flights.length===0 && (

<div className="no-flight">

❌ No Flights Found

</div>

)}



{/* Flights */}

{

flights.map(flight=>(

<div
className="card flight-card"
key={flight._id}
>

<h4>{flight.airline}</h4>

<p>

{flight.from} → {flight.to}

</p>

<p>

Date: {flight.date}

</p>

<p>

Price: ₹{flight.price}

</p>


<button
className="btn btn-success"
onClick={()=>setSelected(flight)}
>

Book Flight

</button>


</div>

))

}



{

selected &&

<BookingModal flight={selected}/>

}


</div>

</div>

)

}

export default SearchFlights;
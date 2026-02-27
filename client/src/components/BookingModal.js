import React,{useState} from "react";
import API from "../services/api";

function BookingModal({flight}){

const [seat,setSeat]=useState("");

const bookFlight = async()=>{

const userId=localStorage.getItem("userId");

await API.post("/booking/book",{

userId,
flightId:flight._id,
seat,
status:"Booked"

});

alert("Booking Successful");

window.location.reload();

}

return(

<div className="modal fade show d-block">

<div className="modal-dialog">

<div className="modal-content">


<div className="modal-header">

<h5 className="modal-title">

Book Flight

</h5>

</div>


<div className="modal-body">

Airline: {flight.airline}

<br/>

Seat:

<input
className="form-control"
onChange={(e)=>setSeat(e.target.value)}
/>

</div>


<div className="modal-footer">

<button
className="btn btn-success"
onClick={bookFlight}
>

Confirm Booking

</button>

</div>

</div>

</div>

</div>

)

}

export default BookingModal;
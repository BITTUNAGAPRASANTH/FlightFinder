import React,{useState} from "react";
import API from "../services/api";

function UpdateFlight(){

const [id,setId]=useState("");
const [price,setPrice]=useState("");

const update=async()=>{

await API.put("/flights/update/"+id,{
price
});

alert("Updated");

}

return(

<div className="container">

<h2>Update Flight</h2>

<input
placeholder="Flight ID"
className="form-control"
onChange={(e)=>setId(e.target.value)}
/>

<br/>

<input
placeholder="New Price"
className="form-control"
onChange={(e)=>setPrice(e.target.value)}
/>

<br/>

<button
className="btn btn-warning"
onClick={update}
>

Update

</button>

</div>

)

}

export default UpdateFlight;
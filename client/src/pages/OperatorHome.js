import React from "react";

function OperatorHome(){

const name = localStorage.getItem("name");

return(

<div className="container mt-5">

<h2>Flight Operator Dashboard</h2>

<h4>Welcome {name}</h4>

<p>

Here you can manage flights.

</p>

</div>

)

}

export default OperatorHome;
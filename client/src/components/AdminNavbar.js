import React from "react";
import { Link,useNavigate } from "react-router-dom";

function AdminNavbar(){

const navigate = useNavigate();

const logout = () => {

localStorage.clear();

window.location.href = "/";

};

return(

<nav className="navbar navbar-dark bg-dark">

<div className="container">

<span className="navbar-brand">

Admin Panel

</span>


<div>

<Link
to="/admin"
className="btn btn-light me-2"
>

Dashboard

</Link>


<Link
to="/addflight"
className="btn btn-primary me-2"
>

Add Flight

</Link>


<Link
to="/updateflight"
className="btn btn-warning me-2"
>

Update Flights

</Link>


<button
className="btn btn-danger"
onClick={logout}
>

Logout

</button>


</div>


</div>

</nav>

)

}

export default AdminNavbar;
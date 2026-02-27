import React, { useState } from "react";
import API from "../services/api";
import { useNavigate, Link } from "react-router-dom";

function Register() {

const navigate = useNavigate();

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
const [role, setRole] = useState("user");

const [error, setError] = useState("");
const [loading, setLoading] = useState(false);


// Validation

const validate = () => {

if (!name.trim()) return "Name is required";

if (!email.trim()) return "Email is required";

if (password.length < 6)
return "Password must be at least 6 characters";

if (password !== confirmPassword)
return "Passwords do not match";

return null;

};


// Register Function

const register = async (e) => {

e.preventDefault();

setError("");

const validationError = validate();

if(validationError){

setError(validationError);
return;

}

setLoading(true);

try{

await API.post("/users/register",{

name,
email,
password,
role

});

alert("Registration Successful");

navigate("/login");

}

catch(err){

setError("Registration Failed");

}

setLoading(false);

};


return(

<div className="container mt-5">

<div className="login-box">

<h2 className="text-center mb-4">

Register

</h2>

<form onSubmit={register}>


<input
className="form-control mb-3"
placeholder="Full Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>


<input
type="email"
className="form-control mb-3"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>


<input
type="password"
className="form-control mb-3"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>


<input
type="password"
className="form-control mb-3"
placeholder="Confirm Password"
value={confirmPassword}
onChange={(e)=>setConfirmPassword(e.target.value)}
/>


{/* Role Selection */}

<select
className="form-control mb-3"
value={role}
onChange={(e)=>setRole(e.target.value)}
>

<option value="user">

User

</option>

<option value="admin">

Admin

</option>

<option value="operator">

Operator

</option>

</select>


{error &&

<div className="alert alert-danger">

{error}

</div>

}


<button
className="btn btn-success w-100"
disabled={loading}
>

{loading ? "Registering..." : "Register"}

</button>


<p className="text-center mt-3">

Already have account?

<Link to="/login">

 Login Here

</Link>

</p>


</form>

</div>

</div>

)

}

export default Register;
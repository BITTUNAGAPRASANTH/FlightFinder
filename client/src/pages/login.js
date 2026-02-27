import React, { useState } from "react";
import API from "../services/api";
import { useNavigate, Link } from "react-router-dom";
import "../styles/login.css";

function Login() {

const navigate = useNavigate();

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const [error,setError]=useState("");
const [loading,setLoading]=useState(false);


const login = async(e)=>{

e.preventDefault();

setError("");

setLoading(true);

try{

const res = await API.post("/users/login",{
email,
password
});

const user = res.data;


// Save user data

localStorage.setItem("userId",user._id);
localStorage.setItem("role",user.role);
localStorage.setItem("name",user.name);


// Debug check

console.log("Role:",user.role);


// Role Based Navigation

if(user.role === "admin"){

navigate("/admin");

}
else if(user.role === "operator"){

navigate("/operator");

}
else{

navigate("/user");

}

}

catch(err){

setError("Invalid Email or Password");

}

setLoading(false);

};


return(

<div className="login-box">

<h2 className="login-title">

Login

</h2>


<form onSubmit={login}>


<input
className="form-control mb-3"
type="email"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>


<input
className="form-control mb-3"
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>


{error &&

<div className="alert alert-danger">

{error}

</div>

}


<button
className="btn btn-primary w-100"
disabled={loading}
>

{loading ? "Logging in..." : "Login"}

</button>


<p className="text-center mt-3">

Don't have account?

<Link to="/register">

 Register

</Link>

</p>


</form>

</div>

)

}

export default Login;
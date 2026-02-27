import {BrowserRouter,Routes,Route} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/login";
import Register from "./pages/register";
import UserHome from "./pages/UserHome";
import AdminHome from "./pages/AdminHome";
import OperatorHome from "./pages/OperatorHome";
import SearchFlights from "./pages/SearchFlights";
import MyBookings from "./pages/MyBookings";
import AddFlight from "./pages/AddFlight";
import UpdateFlight from "./pages/UpdateFlight";

function App(){

return(

<BrowserRouter>

<Routes>

<Route path="/" element={<Home/>}/>

<Route path="/login" element={<Login/>}/>
<Route path="/admin" element={<AdminHome/>}/>

<Route path="/register" element={<Register/>}/>

<Route path="/user" element={<UserHome/>}/>

<Route path="/admin" element={<AdminHome/>}/>

<Route path="/operator" element={<OperatorHome/>}/>

<Route path="/search" element={<SearchFlights/>}/>

<Route path="/bookings" element={<MyBookings/>}/>

<Route path="/addflight" element={<AddFlight/>}/>

<Route path="/updateflight" element={<UpdateFlight/>}/>

</Routes>

</BrowserRouter>

)

}

export default App;
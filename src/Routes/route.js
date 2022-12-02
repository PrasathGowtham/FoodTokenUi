import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Cart from "../Modules/Generator/cart";
import Homepage from "../Modules/Generator/homepage";
import Food from "../Modules/Generator/token";
import Signup from "../Modules/singnup";
import Login from "../Modules/login";
function Routerpath(){

return(
<BrowserRouter>
<Routes>
    <Route path="/home"  element={<Homepage/>}/>
    <Route path="/token"  element={<Food/>}/>
    <Route path="/"  element={<Login/>}/>
    <Route path="/signup"  element={<Signup/>}/>
</Routes>

</BrowserRouter>

)

}

export default Routerpath;
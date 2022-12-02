import React from "react";
import Login from "./Modules/login";
import "./app.css"
import Signup from "./Modules/singnup";
import Homepage, { Token} from "./Modules/Generator/homepage";
import Item from "./context/context";
import Routerpath from "./Routes/route";
import Food from "./Modules/Generator/token";
function App() {
  return (
    <div className="App">
      
<Routerpath/>
   
    </div>
  );
}


export default App;

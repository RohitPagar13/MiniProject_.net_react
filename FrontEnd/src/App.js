import { useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import './App.css';

function App() {
  const [isloggedin, setLoggedin] = useState(null);
  const [readval, setVal] = useState("");
  const navigate = useNavigate();

  const handeldata = (event) => {
    setVal(event.target.value);
  };

  
  const check = (event) => {
    if (event.target.value === "LoggedIn") {
      const data = readval ;
      if(!(data.includes(" ") || data==="")){
      sessionStorage.setItem("key", JSON.stringify(data))
      setVal("");
      setLoggedin(true)
      }
    }
    else {
     // sessionStorage.setItem("key", "")
      setLoggedin(false)
      sessionStorage.removeItem("key");
      navigate("/");
    }
  }



  return (
    <div>
      <nav>
        <ul>
          <li>     <Link to="/Home">Home</Link> </li>
          <li>     <Link to="/Contactus">Contactus</Link> </li>
          <li>     <Link to="/Listemployee">Listemployee</Link> </li>
        </ul>
      </nav>
      <span><input type="text" id="name" value={readval} onInput={handeldata} /></span>
      {isloggedin ?
        <button onClick={check} value="LoggedOut">LoggedOut</button>
        :
        <button onClick={check} value="LoggedIn">LoggedIn</button>
      }
    
      <Outlet />

    </div>
  );
}
export default App;

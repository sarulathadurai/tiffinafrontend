import tiffina_icon from "./assets/Tiffinia_icon_small.png";
import obj1 from "./assets/object 1.png"
import './App.css';
import {Link} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <img src={tiffina_icon} className="floating"></img>
      <div className="aligndesc">
      <p id="tagline">
          <span style={{fontWeight:"bold"}}>HURRAY!!</span><br />
          HUNGER DONT'T WAIT
      </p>
      <Link to="/Login">
        <button className="btn-style">
         <span className="highlight">GET STARTED</span>
        </button>
      </Link>
      <Link to="/Register">
        <button className="btn-style">
            Not a member ? <span className="highlight">Register</span>
        </button>
      </Link>
        
      </div>
      <div>
        <img src={obj1} id="pick"></img>
      </div>
    </div>
  );
}

export default App;

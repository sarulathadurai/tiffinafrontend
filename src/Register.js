import React from 'react';
import UserSignup from "./user/UserSignup";
import VendorSignup from "./vendor/VendorSignup";
import { Link } from "react-router-dom";
import object2 from "./assets/object 2.png";


const Register = () => {
    return ( 
        <div className="row">
            <div className="designLogin">
                <img id="obj2" src={object2}></img>
            </div>
            <div className="card col-6 m-3 " style={{width:"25rem"}}>
                <div className="card-body">
                    <h5 className="card-title">Want to try tasty foods ?</h5>
                    <p className="card-text">
                        Register as user in our app and get to eat tasty foods.
                    </p>
                    <Link to="/user/Register">
                        <button className="Submit">Register</button>
                    </Link>
                </div>
            </div>
            <div className="card col-6 m-3"  style={{width:"25rem"}}>
            <div className="card-body">
                <h5 className="card-title">Want to partner with us?</h5>
                <p className="card-text">
                    Partner with us by registering your shop details here.
                </p>
                <Link to="/vendor/Register">
                    <button className="Submit">Register</button>
                </Link>
            </div>
            </div>
        </div>
     );
}
 
export default Register;
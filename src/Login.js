import React from 'react';
import object2 from "./assets/object 2.png";
import {Link} from"react-router-dom";

const Login = () => {
    return ( 
        <React.Fragment>
                    <div className="row">
            <div className="designLogin">
                <img id="obj2" src={object2}></img>
            </div>
            <div className="card col-6 m-3 " style={{width:"25rem"}}>
                <div className="card-body">
                    <h5 className="card-title">Want to try tasty foods ?</h5>
                    <p className="card-text">
                        Customer Login
                    </p>
                    <Link to="/user/Login">
                        <button className="Submit">Login</button>
                    </Link>
                </div>
            </div>
            <div className="card col-6 m-3"  style={{width:"25rem"}}>
            <div className="card-body">
                <h5 className="card-title">Want to partner with us?</h5>
                <p className="card-text">
                    ShopKeeper Login
                </p>
                <Link to="/vendor/Login">
                    <button className="Submit">Login</button>
                </Link>
            </div>
            </div>
        </div>
        </React.Fragment>
        
     );
}
 
export default Login;
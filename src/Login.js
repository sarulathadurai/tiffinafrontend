import React from 'react';
import UserLogin from "./user/UserLogin";
import VendorLogin from "./vendor/VendorLogin";
import object2 from "./assets/object 2.png"
const Login = () => {
    return ( 
        <React.Fragment>
            <div className="designLogin">
                <img id="obj2" src={object2}></img>
            </div>
            <div className="row mb-3 mt-1" >
                    <UserLogin className="col-6"/>
                    <VendorLogin className="col-6"/>
            </div>
        </React.Fragment>
        
     );
}
 
export default Login;
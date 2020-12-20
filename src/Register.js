import React from 'react';
import UserSignup from "./user/UserSignup";
import VendorSignup from "./vendor/VendorSignup";
const Register = () => {
    return ( 
        <div className="row">
            <UserSignup className="col-6"/>
            <VendorSignup className="col-6"/>
        </div>
     );
}
 
export default Register;
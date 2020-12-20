import React from 'react';
import {isVendorAuthenticated,vendorsignout} from "./vendor/helper/vendorapicall";
import {isAuthenticated,signout} from "./user/helper/userapicall";
import {withRouter} from "react-router-dom";

const SignOut = ({history}) => {
    return ( 
          (isAuthenticated() || isVendorAuthenticated())&& (
            <button className="btn-style signout">
                 <span
                   className="text-warning"
                   onClick={() => {
                    isAuthenticated() && signout(() => {
                       history.push("/");
                    });
                    isVendorAuthenticated() && vendorsignout(() => {
                        history.push("/");
                    });   
                   }}
                 >
                 Signout
                </span>
            </button>
           )
     );
}
 
export default withRouter(SignOut);
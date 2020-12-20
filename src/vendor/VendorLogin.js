import React,{useState} from 'react';
import {signin,authenticate} from "./helper/vendorapicall";
import { withRouter } from "react-router-dom";

const VendorLogin = ({history}) => {
    const [values,setValues] = useState({
      
        mobile:"",
        password:"",
        error:"",
        loading:false,
        didRedirect:false
    })
 
    const {mobile,password,loading,error,didRedirect} = values;
    
 
    const handleChange = name => e => {
 
      setValues({...values,error:false,[name]:e.target.value})
   }
 
    const handleSubmit = (e) => {
 
         e.preventDefault();
         setValues({
             ...values,error:false,loading:true
         });
         signin({mobile,password})
             .then(data => {
                 if(data?.error){
                     setValues({
                         ...values,error:data.error,loading:false
                     })
                     }
                 else{
                     authenticate(data, ()=>{
                         setValues({
                             ...values,
                             didRedirect:true
                         })
                     })
 
                 }
             })
             .catch(console.log("database not reachable"))
     } 

     const performRedirect = () => {
        if(didRedirect){
            return history.push("/products")
        }    
    //    else{
    //           return history.push("/")
  
    //     }
    }       
   
    const ErrorMessage = () => {
        return (<div className="row">
               <div className="col-md-6 offset-sm-3 text-left">
                 <div className="alert alert-danger"
                 style={{display: error ?"": "none" }}>
                     Registeration failed.Retry!!
                 </div>
               </div>
         </div>
        )}

    return ( 
        <React.Fragment>
            <div className="form container">
            <h3 className="mb-4 highlight">Vendor Login</h3>
                {performRedirect()}
                {ErrorMessage()}
                <div class="mb-3 row">
                    <label class="col-sm-2 col-form-label">Mobile</label>
                    <div class="col-sm-10">
                        <input type="Number" class="form-control" onChange = {handleChange("mobile")}/>
                    </div>
                </div>
                <div class="mb-3 row">
                    <label class="col-sm-2 col-form-label">Password</label>
                    <div class="col-sm-10">
                        <input type="password" class="form-control" onChange = {handleChange("password")}/>
                    </div>
                </div>
                <button className="Submit" onClick = {handleSubmit}>
                    Submit
                </button>
            </div>
        </React.Fragment>
     );
}
 
export default withRouter(VendorLogin);
import React,{useState} from 'react';
import {signin,authenticate,isAuthenticated} from "./helper/userapicall";
import {withRouter} from "react-router-dom";

const UserLogin = ({history}) => {

    const [values,setValues] = useState({
      
        username:"",
        password:"",
        error:"",
        loading:false,
        didRedirect:false
    })
 
    const {username,password,loading,error,didRedirect} = values;
    const {user} = isAuthenticated();
    
 
    const handleChange = name => e => {
 
      setValues({...values,error:false,[name]:e.target.value})
   }
 
    const handleSubmit = (e) => {
 
         e.preventDefault();
         setValues({
             ...values,error:false,loading:true
         });
         signin({username,password})
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
             .catch(console.log("database is not reachable"))
     } 
     
    
     const performRedirect = () => {
        if(didRedirect){
            return history.push("/products")
        }    
    }       
   
    const ErrorMessage = () => {
        return (<div className="row">
               <div className="col-md-6 offset-sm-3 text-left">
                 <div className="alert alert-danger"
                 style={{display: error ?"": "none" }}>
                     Signup is not successful.Retry once!
                 </div>
               </div>
         </div>
        )} 
    return ( 
        <React.Fragment>
            <div className="form container">
                <h3 className="mb-4 highlight">User Login</h3>
                {ErrorMessage()}
                {performRedirect()}
                <div class="mb-3 row">
                    <label class="col-sm-2 col-form-label" name="username">Username</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="inputPassword" onChange={handleChange("username")}/>
                    </div>
                </div>
                <div class="mb-3 row">
                    <label class="col-sm-2 col-form-label" name="password">Password</label>
                    <div class="col-sm-10">
                        <input type="password" class="form-control" id="inputPassword" onChange={handleChange("password")}/>
                    </div>
                </div>
                <button className="Submit" onClick={handleSubmit}>
                    Submit
                </button>
            </div>
        </React.Fragment>
     );
}
 
export default withRouter(UserLogin);
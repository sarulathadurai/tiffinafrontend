import React,{useState} from 'react';
import {signup} from "./helper/vendorapicall";
import {withRouter} from "react-router-dom";
const UserSignup = ({history}) => {
    const [values,setValues] = useState({
        name:"",
        lastname:"",
        mobile:"",
        password:"",
        email:"",
        shopname:"",
        shopdescription:"",
        error:"",
        success:false

    })

    const{name,lastname,mobile,password,email,shopname,shopdescription,error,success} = values;

    const handleChange = name => e => {

        setValues({...values,error:false,[name]:e.target.value})
      }
  
      const handleSubmit = e => {
          e.preventDefault();
          setValues({
              ...values,error:false
          })
          signup({name,lastname,mobile,password,email,shopname,shopdescription})
              .then(data => {
                  if(data?.error){
                    setValues({...values,error:data.error,sucess: false});
                  }else{
                      setValues({
                          ...values,
                            name:"",
                            lastname:"",
                            mobile:"",
                            password:"",
                            email:"",
                            shopname:"",
                            shopdescription:"",
                            error:"",
                            success:true
                      })
                  }
              })
              .catch(()=> {
                  console.log("Signup failed")
              })
      }

      const SuccessMessage = () => {
        return <div className="row">
               <div className="col-md-6 offset-sm-3 text-left">
                 <div className="alert alert-success center"
                 style={{display:success ?"": "none" }}>
                     UserCreated {success&&history.push("/vendor/Login")}
                 </div>
               </div>
         </div>
     }
 
     const ErrorMessage = () => {
         return <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                  <div className="alert alert-danger"
                  style={{display:error ?"": "none" }}>
                      Registeration is not successful.Retry once!
                  </div>
                </div>
          </div>
      } 
  
    return ( 
        <React.Fragment>
            <div className="form container">
                <h3 className="mb-4 highlight">Vendor Registeration</h3>
                {SuccessMessage()}
                {ErrorMessage()}
                <div class="mb-3 row">
                    <label class="col-sm-2 col-form-label">Name</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" onChange = {handleChange("name")} required/>
                    </div>
                </div>
                <div class="mb-3 row">
                    <label class="col-sm-2 col-form-label">Lastname</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" onChange = {handleChange("lastname")} required/>
                    </div>
                </div>
                <div class="mb-3 row">
                    <label class="col-sm-2 col-form-label">E-mail</label>
                    <div class="col-sm-10">
                        <input type="email" class="form-control" onChange = {handleChange("email")} required/>
                    </div>
                </div>
                <div class="mb-3 row">
                    <label class="col-sm-2 col-form-label">Mobile</label>
                    <div class="col-sm-10">
                        <input type="Number" class="form-control" onChange = {handleChange("mobile")} required/>
                    </div>
                </div>
                <div class="mb-3 row">
                    <label class="col-sm-2 col-form-label">Shop Name</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" onChange = {handleChange("shopname")} required/>
                    </div>
                </div>
                <div class="mb-3 row">
                    <label class="col-sm-2 col-form-label">Description</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" onChange = {handleChange("shopdescription")}/>
                    </div>
                </div>
                <div class="mb-3 row">
                    <label class="col-sm-2 col-form-label">Password</label>
                    <div class="col-sm-10">
                        <input type="password" class="form-control" onChange = {handleChange("password")} required/>
                    </div>
                </div>
                <button className="Submit" onClick={handleSubmit}>
                    Submit
                </button>
            </div>
        </React.Fragment>
     );
}
 
export default withRouter(UserSignup);
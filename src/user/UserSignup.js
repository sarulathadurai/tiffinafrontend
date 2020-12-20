import React,{useState} from 'react';
import {signup} from "./helper/userapicall";
import {withRouter} from "react-router-dom";
const UserSignup = ({history}) => {

    const [values,setValues] = useState({
        name:"",
        lastname:"",
        username:"",
        password:"",
        email:"",
        error:"",
        success:false

    })

    const{name,lastname,username,password,email,error,success} = values;

    const handleChange = name => e => {
        setValues({...values,error:false,[name]:e.target.value})
      }
  
      const handleSubmit = e => {
          e.preventDefault();
          setValues({
              ...values,error:false
          })
          signup({name,lastname,username,password,email})
              .then(data => {
                  if(data?.error){
                    setValues({...values,error:data.error,sucess: false});
                  }else{
                      setValues({
                          ...values,
                            name:"",
                            lastname:"",
                            username:"",
                            password:"",
                            email:"",
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
                     UserCreated 
                     {history.push("/Login")}
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
            <h3 className="mb-4 highlight">User Registeration</h3>
                {SuccessMessage()}
                {ErrorMessage()}
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label" name="name">Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" onChange = {handleChange("name")} required/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label" name="lastname" >Lastname</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" onChange = {handleChange("lastname")} required/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label" name="email" >E-mail</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control"onChange = {handleChange("email")} required/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label" name="username" >Username</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" onChange = {handleChange("username")} required/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label" name="password">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control"  onChange = {handleChange("password")} required/>
                    </div>
                </div>
                <button onClick = {handleSubmit} className="Submit">
                    Submit
                </button>
            </div>
        </React.Fragment>
     );
}
 
export default withRouter(UserSignup);
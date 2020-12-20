import {API} from "../../backend";

export const signup = vendor => {

    return fetch(`${API}vendor/signup`,{
        method:"POST",
        headers: {
            Accept: "application/json",
            "Content-Type":"application/json"
        },
        body: JSON.stringify(vendor)
    })
    .then(res => {
        return res.json();
        
    })
    .catch(err => console.log(err))
};

export const signin = vendor => {

    return fetch(`http://localhost:8000/tiffina/vendor/signin`,{
        method:"POST",
        headers: {
            Accept: "application/json",
            "Content-Type":"application/json"
        },
        body: JSON.stringify(vendor)
    })
    .then(res => {
        return res.json();
    })
    .catch(err => console.log(err))
}

export const authenticate = (data,next) => {

    if(typeof window !== "undefined"){    
        localStorage.setItem("jwt",JSON.stringify(data));
        next();
    }
}

export const vendorsignout = next => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("jwt");
      next();
  
      return fetch(`${API}vendor/signout`, {
        method: "GET"
      })
        .then(response => console.log("signout success"))
        .catch(err => console.log(err));
    }
};

export const isVendorAuthenticated = () => {
    if(typeof window == "undefined"){
        return false;
   
    }
    if(localStorage.getItem("jwt")){
        return JSON.parse(localStorage.getItem("jwt"));
    }
    else{
       return false;
    }
};
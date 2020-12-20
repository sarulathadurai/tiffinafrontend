import React,{useState,useEffect} from 'react';
import {getProducts} from "./helper/productapicall";
import object3 from "../assets/object 3.png"
import SignOut from '../SignOut';


const Product = () => {


    const [products,setProduct] = useState([]);
    const [error,setError] = useState("")

    const loadProducts = () => {
        return(
            getProducts().then(data=>{
            if(data.error){
                setError({
                    error:data.error
                })
            }
            else{
                console.log(data);
                setProduct(data);
            }
        })
        .catch(error=>console.log(error))
        )
    }

    useEffect(()=>{
        loadProducts()
    },[])

    return ( 
        <React.Fragment>
        <div className="designLogin">
                <SignOut/>
                <img id="obj2" src={object3}></img>
                <h3 className="tagline">Product List</h3>
                
            </div>
        <div className="container">
            
            {  
               products.map((product,index)=>{
                       return(
                        <div className="row m-4">
                            <div class="card" key={index} style={{width:"30rem"}}>
                                <div class="card-body">
                                    <h5 class="card-title">Product:{product.title}</h5>
                                    <h6 class="card-subtitle mb-2 ">
                                        {product.descripton}
                                    </h6>
                                    <p class="card-text">
                                    Price:{product.price}
                                    </p>
                                </div>
                            </div>
                        </div>
                       ) 
                    })
            }
        </div>
    
        </React.Fragment>
        
    );
}
 
export default Product;
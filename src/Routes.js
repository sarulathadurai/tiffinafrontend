import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import App from './App';
import Login from './Login';
import Product from './product/Product';
import Register from './Register';
import UserLogin from './user/UserLogin';
import UserSignup from './user/UserSignup';
import VendorLogin from './vendor/VendorLogin';
import VendorSignup from './vendor/VendorSignup';

const Routes = () => {
    return ( 
        <Router>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/Login" component={Login}/>
                <Route path="/user/Login" component={UserLogin}/>
                <Route path="/vendor/Login" component={VendorLogin}/>
                <Route path="/Register" component={Register}/>
                <Route path="/user/Register" component={UserSignup}/>
                <Route path="/vendor/Register" component={VendorSignup}/>
                <Route path="/products" component={Product}/>
            </Switch>
        </Router>
     );
}
 
export default Routes;
import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import App from './App';
import Login from './Login';
import Product from './product/Product';
import Register from './Register';

const Routes = () => {
    return ( 
        <Router>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/Login" component={Login}/>
                <Route path="/Register" component={Register}/>
                <Route path="/products" component={Product}/>
            </Switch>
        </Router>
     );
}
 
export default Routes;
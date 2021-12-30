import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductList from "./components/products/ProductList";
import AddProduct from "./components/products/AddProduct";
import EditProduct from "./components/products/EditProduct";
import AddGroup from "./components/products/productgroup/AddGroup";
import GroupList from "./components/products/productgroup/GroupList";
import EditGroup from "./components/products/productgroup/EditGroup";
import Home from "./Home";
const FrontendRoutes = () => {
  return (
    <Router>
          
      <div className="container">
              
        <div className="columns">
                  
          <div className="column is-half is-offset-one-quarter">
                      
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/products" component={ProductList} />
              <Route exact path="/products/addproduct" component={AddProduct} />
              <Route
                exact
                path="/products/editproduct/:id"
                component={EditProduct}
              />
              <Route exact path="/productgroups" component={GroupList} />
              <Route
                exact
                path="/productgroups/addgroup"
                component={AddGroup}
              />
              <Route
                exact
                path="/productgroups/editgroup/:id"
                component={EditGroup}
              />
            </Switch>
                    
          </div>
                
        </div>
            
      </div>
          
    </Router>
  );
};

export default FrontendRoutes;

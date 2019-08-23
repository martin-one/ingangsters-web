import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../Home/Home";
import Signin from "../Sign/Signin";
import SigninAdmin from "../Sign/SigninAdmin";
import Signup from "../Sign/Signup";
import Checkout from "../Checkout/Checkout";
import Cart from "../Cart/Cart";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/signin/admin" exact component={SigninAdmin} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/checkout" exact component={Checkout} />
        <Route path="/cart" exact component={Cart} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;

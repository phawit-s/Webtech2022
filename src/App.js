import React from "react";
import Home from "./components/home";
import Register from "./components/authentication/register";
import Signin from "./components/authentication/signin";
import Headphone from "./components/product/headphone";
import Earbud from "./components/product/earbud";
import Inear from "./components/product/inear";
import Speaker from "./components/product/speaker";
import Productdescription from "./components/product/productdescription";
import Checkout from "./components/checkout";
import Wishlist from "./components/wishlist";
import Cart from "./components/cart";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { ThemeProvider } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/headphone" component={Headphone} />
            <Route exact path="/earbud" component={Earbud} />
            <Route exact path="/inear" component={Inear} />
            <Route exact path="/speaker" component={Speaker} />
            <Route exact path="/description" component={Productdescription} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/wishlist" component={Wishlist} />
            <Route exact path="/cart" component={Cart} />
          </Switch>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;

import React from "react";
import Home from "./components/home";
import Register from "./components/authentication/register";
import Signin from "./components/authentication/signin";
import Headphone from "./components/product/headphone";
import Earbud from "./components/product/earbud";
import Inear from "./components/product/inear";
import Speaker from "./components/product/speaker";
import Allproduct from "./components/product/allproduct";
import Productdescription from "./components/product/productdescription";
import Checkout from "./components/checkout";
import Wishlist from "./components/wishlist";
import Cart from "./components/cart";
import Promotion from "./components/promotion";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { ThemeProvider } from "react-bootstrap";
import { ToastProvider } from "react-toast-notifications";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <ToastProvider>
        <AuthProvider>
          <Router basename="/project/it17/it17">
            <Switch>
              <Route path="/" component={Home} />
              <Route path="/register" component={Register} />
              <Route path="/signin" component={Signin} />
              <Route path="/headphone" component={Headphone} />
              <Route path="/earbud" component={Earbud} />
              <Route path="/inear" component={Inear} />
              <Route path="/speaker" component={Speaker} />
              <Route path="/all" component={Allproduct} />
              <Route path="/description" component={Productdescription} />
              <Route path="/checkout" component={Checkout} />
              <Route path="/wishlist" component={Wishlist} />
              <Route path="/cart" component={Cart} />
              <Route path="/promotion" component={Promotion} />
            </Switch>
          </Router>
        </AuthProvider>
      </ToastProvider>
    </ThemeProvider>
  );
};

export default App;

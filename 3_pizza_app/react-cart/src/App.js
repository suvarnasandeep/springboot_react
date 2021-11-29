import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import ProductsPage from "./pages/ProductsPage";
import Cart from "./pages/Cart";
import SingleProduct from "./pages/SingleProduct";
import { CartContext } from "./CartContext";
import { useState, useEffect } from "react";

//https://www.youtube.com/watch?v=MfhZJcTOy1A&t=46s
//yarn start

const App = () => {
  const [cart, setCart] = useState({});
  //fetch from local storage
  useEffect(() => {
    const cart = window.localStorage.getItem("cart");
    setCart(JSON.parse(cart));
    console.log(cart);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <Router>
        <CartContext.Provider value={{ cart, setCart }}>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact></Route>
            {/* <Route path="/about" component={About} exact></Route> */}
            <Route path="/products" component={ProductsPage} exact></Route>
            <Route path="/products/:id" component={SingleProduct} exact></Route>
            <Route path="/cart" component={Cart} exact></Route>
          </Switch>
        </CartContext.Provider>
      </Router>
    </>
  );
};

export default App;

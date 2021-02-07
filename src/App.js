import Home from "./pages/Home/Home";
import Navbar from "./components/navbar/Navbar";
import "./app.css";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Catalog from "./pages/Catalog/Catalog";
import Product from "./pages/Product/Product";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import Success from "./pages/Success/Success";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/catalog" component={Catalog} />
          <Route path="/product/:id" component={Product} />
          <Route path="/cart/:id?" component={Cart} />
          <Route path="/shipping" component={Checkout} />
          <Route path="/success" component={Success} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

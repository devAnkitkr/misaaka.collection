import React from "react";
import { Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import CollectionOverview from "./pages/CollectionOverview.jsx";
import SingleItemDisplay from "./pages/SingleItemDisplay.jsx"
import FAQ from "./pages/FAQ.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx"
import Footer from "./components/footer/Footer.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/products/:collectionId" component={CollectionOverview} />
      <Route path="/products/collection/:itemId" component={SingleItemDisplay} />
      <Route path="/FAQ" component={FAQ} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />

      <Footer />
    </div>
  );
}

export default App;

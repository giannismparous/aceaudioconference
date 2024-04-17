import React from "react";
import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Home from "./components/Home";
import Products from "./components/Products";
import ProductDetail from './components/ProductDetail';
import Contact from "./components/Contact";
import About from "./components/About";
import Projects from "./components/Projects";
import NavigationBar from "./components/NavigationBar";

function App() {

  const location = useLocation();
  
  return (
    <div>
      {<NavigationBar />}
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
        </Routes>
    </div>
  );
}

export default App;

import "./App.css";
import Counter from "./views/counter/Counter";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./views/home/Home";
import About from "./views/about/About";
import Shop from "./views/shop/Shop";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./views/product/Product";

function App() {
  const numberFromApp = 7;
  return (
    <div className="container mt-2">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<Product />} />
          <Route
            path="/counter"
            element={<Counter numberFromApp={numberFromApp} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

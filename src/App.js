import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./page/Home";
import Contact from "./page/Contact";
import Products from "./page/Products";
import CGV from "./page/CGV";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path='/CGV' element={<CGV />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
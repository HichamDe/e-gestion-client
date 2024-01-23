import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Dahboard from "./pages/Dashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dahboard />} />
        <Route path="/product" element={<Product />} />
        <Route path="/register" element={<Login />} />
        <Route path="/cart" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

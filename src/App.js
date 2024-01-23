import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Dahboard from "./pages/Dashboard";
import Cart from "./pages/Cart";
import Commande from "./pages/Commande";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dahboard />} />
        <Route path="/product" element={<Product />} />
        <Route path="/register" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/commande" element={<Commande />} />
      </Routes>
    </BrowserRouter>
  );
}

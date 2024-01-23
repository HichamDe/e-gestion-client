import Home from "./pages/_home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/_login/Login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

import { Route, BrowserRouter, Routes } from "react-router-dom";
import Navbar from "../components/navbar";
import Home from "../pages/home";
export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/malone" element={<h1>Oia, eu aquiiiiiii bb!</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

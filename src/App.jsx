import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import ThankYou from "./pages/ThankYou";
import Forbidden from "./pages/Forbidden";
import NotFound from "./pages/NotFound";
export default function App() {
  return (
    <div className="container py-3">
      <div className="row">
        <div className="col-3">
          <Menu />
        </div>
        <div className="col-9">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gioi-thieu" element={<About />} />
            <Route path="/san-pham" element={<Products />} />
            <Route path="/lien-he" element={<Contact />} />
            <Route path="/thanh-cong" element={<ThankYou />} />
            <Route path="/forbidden" element={<Forbidden />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

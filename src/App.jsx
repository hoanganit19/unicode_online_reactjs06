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
import ProductDetail from "./pages/ProductDetail";
import Users from "./pages/Users";
import BestSeller from "./pages/BestSeller/BestSeller";
import BestSellerMonth from "./pages/BestSeller/BestSellerMonth";
import AuthMiddleware from "./middlewares/AuthMiddleware";
import Auth from "./pages/Auth/Auth";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route element={<AuthMiddleware />}>
          <Route path="/gioi-thieu" element={<About />} />
          <Route path="/san-pham">
            <Route index element={<Products />} />
            <Route path=":path" element={<ProductDetail />} />
            <Route path="ban-chay">
              <Route index element={<BestSeller />} />
              <Route path="theo-thang" element={<BestSellerMonth />} />
            </Route>
          </Route>
          <Route path="/lien-he" element={<Contact />} />
          <Route path="/thanh-cong" element={<ThankYou />} />
          <Route path="/forbidden" element={<Forbidden />} />
          <Route path="/users" element={<Users />} />
        </Route>
      </Route>
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="login" element={<Auth />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

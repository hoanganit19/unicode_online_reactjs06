import { Route } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import AuthMiddleware from "../middlewares/AuthMiddleware";
import About from "../pages/About";
import Products from "../pages/Products";
import ProductDetail from "../pages/ProductDetail";
import BestSeller from "../pages/BestSeller/BestSeller";
import BestSellerMonth from "../pages/BestSeller/BestSellerMonth";
import Contact from "../pages/Contact";
import ThankYou from "../pages/ThankYou";
import Forbidden from "../pages/Forbidden";
import Users from "../pages/Users";

export const privateRouter = (
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
);

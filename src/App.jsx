import { Routes, Route, useRoutes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NotFound from "./pages/NotFound";
import { publicRouter } from "./routes/publicRouter";
import { privateRouter } from "./routes/privateRouter";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import BestSeller from "./pages/BestSeller/BestSeller";
import BestSellerMonth from "./pages/BestSeller/BestSellerMonth";
import AuthMiddleware from "./middlewares/AuthMiddleware";
import Auth from "./pages/Auth/Auth";
import ScrollTop from "./components/ScrollTop";
export default function App() {
  // const routes = [
  //   {
  //     path: "/",
  //     element: <Home />,
  //   },
  //   {
  //     path: "/gioi-thieu",
  //     element: <About />,
  //   },
  //   {
  //     path: "/san-pham",
  //     element: <AuthMiddleware />,
  //     children: [
  //       {
  //         index: true,
  //         element: <Products />,
  //       },
  //       {
  //         path: ":path",
  //         element: <ProductDetail />,
  //       },
  //       {
  //         path: "ban-chay",
  //         children: [
  //           {
  //             index: true,
  //             element: <BestSeller />,
  //           },
  //           {
  //             path: "theo-thang",
  //             element: <BestSellerMonth />,
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     path: "/auth/login",
  //     element: <Auth />,
  //   },
  // ];
  // const element = useRoutes(routes);
  // return element;
  return (
    <div style={{ height: "2000px" }}>
      <ScrollTop />
      <Routes>
        {publicRouter}
        {privateRouter}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

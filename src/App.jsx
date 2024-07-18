import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NotFound from "./pages/NotFound";
import { publicRouter } from "./routes/publicRouter";
import { privateRouter } from "./routes/privateRouter";
export default function App() {
  return (
    <Routes>
      {publicRouter}
      {privateRouter}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

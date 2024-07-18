import { Route } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import Auth from "../pages/Auth/Auth";
export const publicRouter = (
  <Route path="/auth" element={<AuthLayout />}>
    <Route path="login" element={<Auth />} />
  </Route>
);

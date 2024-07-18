import { Navigate, Outlet } from "react-router-dom";

export default function AuthMiddleware() {
  const isAuth = false;
  if (isAuth) {
    return <Outlet />;
  }
  return <Navigate to="/auth/login" />;
}

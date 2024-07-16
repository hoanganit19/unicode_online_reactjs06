import { Navigate } from "react-router-dom";

export const navigateForbidden = () => {
  return <Navigate to="/forbidden" />;
};

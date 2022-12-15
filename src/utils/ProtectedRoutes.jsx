import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "./authContext";

export const ProtectedRoutes = () => {
  const { user } = useAuthContext();
  return user ? <Outlet /> : <Navigate to={"/signin"} />;
};

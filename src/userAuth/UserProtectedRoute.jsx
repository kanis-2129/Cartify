import { Navigate } from "react-router-dom";
import { useUserAuth } from "./UserAuthContext";

export default function UserProtectedRoute({ children }) {
  const { user } = useUserAuth();

  if (!user) {
    return <Navigate to="/user-login" />;
  }

  return children;
}

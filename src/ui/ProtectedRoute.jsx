import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useCurrentUser from "../features/authentication/useCurrentUser";

function ProtectedRoute({ children }) {
  // console.log(children);
  const navigate = useNavigate();
  //1 Load the authenticated user
  //2 If there is no authenticated user redirect to /Login page
  //3 If there is an authenticated user render the protected route

  const { isLoading, isAuthenticated } = useCurrentUser();

  useEffect(
    function () {
      console.log(isAuthenticated);
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, navigate, isLoading]
  );
  if (isAuthenticated) return children;
}

export default ProtectedRoute;

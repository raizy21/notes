import { Navigate, useLocation } from "react-router"; //importing Navigate and useLocation from react-router
import { useUsers } from "../context/context"; //importing useUsers from context

// ProtectedRoute component
const ProtectedRoute = ({ children }) => {
  const {
    userState: { currentUser },
  } = useUsers(); //getting currentUser from useUsers
  const location = useLocation(); //getting location from useLocation

  //if currentUser is not available then redirect to signin page
  if (!currentUser) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return children;
};

//exporting ProtectedRoute
export default ProtectedRoute;

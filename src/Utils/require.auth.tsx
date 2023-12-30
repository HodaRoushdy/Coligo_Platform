import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../App/store";

const requireAuth = (WrappedComponent: React.ComponentType) => {
  const AuthWrapper: React.FC = (props) => {
    const IsLogged = useSelector((state: RootState) => state.isLogged.isLoggedIn);

    if (IsLogged) {
      return <WrappedComponent {...props} />;
    } else {
      return <Navigate to={"/"} replace />;
    }
  };
  return AuthWrapper;
};
export default requireAuth;

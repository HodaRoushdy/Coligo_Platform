import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { changeStatus, useAppDispatch } from "../../App/hooks";
import { RootState } from "../../App/store";
import Button from "../Button";

const AuthBtn = () => {
  const IsLogged = useSelector((state: RootState) => state.isLogged.isLoggedIn);
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(changeStatus());
    if (IsLogged) {
      return <Navigate to={"/dashboard"} />;
    } else {
      return <Navigate to={"/"} />;
    }
  };
  return <Button onClick={handleClick}>{IsLogged ? "Logout" : "Login"}</Button>;
};
export default AuthBtn;

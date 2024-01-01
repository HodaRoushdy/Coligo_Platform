import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeStatus, useAppDispatch } from "../../App/hooks";
import { RootState } from "../../App/store";
import Button from "../Button";

const AuthBtn = () => {
  const IsLogged = useSelector((state: RootState) => state.isLogged.isLoggedIn);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();
  useEffect(() => {
    if (IsLogged) {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  }, [IsLogged, navigate]);
  const handleClick = () => {
    dispatch(changeStatus());
  };
  return (
    <Button className="text-indigo-600" onClick={handleClick}>
      {IsLogged ? "Logout" : "Login"}
    </Button>
  );
};
export default AuthBtn;

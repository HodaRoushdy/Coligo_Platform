import { t } from "i18next";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeStatus, useAppDispatch } from "../../App/hooks";
import { RootState } from "../../App/store";
import Button from "../Button";
import { PageRoutes } from "../Utils";

const AuthBtn = () => {
  const IsLogged = useSelector((state: RootState) => state.isLogged.isLoggedIn);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (IsLogged) {
      navigate(PageRoutes.Dashboard);
    } else {
      navigate(PageRoutes.Home);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [IsLogged]);

  const handleClick = () => {
    dispatch(changeStatus());
  };
  return (
    <Button className="text-indigo-600" onClick={handleClick}>
      {IsLogged ? t("logout") : t("login")}
    </Button>
  );
};
export default AuthBtn;

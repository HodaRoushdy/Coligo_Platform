import { t } from "i18next";
import Button from "../Button";
import "./exams.css";

const Examstips = () => {
  return (
    <div className="flex flex-col space-y-2 ">
      <div className="forGradient">
        <h1 className="text-2xl">{t("exams")}</h1>
      </div>
      <p style={{ lineHeight: "20px" }}>{t("examPara")}</p>
      <span>{t("quote")}</span>

        <Button className="btnGradient">{t("buttonTxt")}</Button>
    </div>
  );
};

export default Examstips;

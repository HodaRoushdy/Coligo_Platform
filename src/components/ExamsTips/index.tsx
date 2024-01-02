import { t } from "i18next";
import Button from "../Button";
import "./exams.css";

const ExamTips = () => {
  return (
    <div className="flex flex-col space-y-2">
      <div className="forGradient">
        <h1 className="text-4xl">{t("exams")}</h1>
      </div>
      <div className="lg:w-6/12 md:w-full">
        <p style={{ lineHeight: "24px" }}>{t("examPara")}</p>
      </div>
      <p style={{ color: "grey", fontStyle: "italic", fontSize: 14 }}>
        {t("quote")}
      </p>
      <Button className="btnGradient">{t("buttonTxt")}</Button>
    </div>
  );
};

export default ExamTips;

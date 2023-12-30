import { t } from "i18next";
import Button from "../Button";

const Examstips = () => {
    return (
        <div className="flex flex-col space-y-2 ">
            <h1 className="text-indigo-400">{t("exams")}</h1>
    <p style={{lineHeight:'20px'}}>{t("examPara")}</p>
    <span>{t("quote")}</span>
    <Button className="bg-indigo-600 px-5 text-opacity-40 hover:text-white" width="w-fit">{t("buttonTxt")}</Button>
</div>
    )

};

export default Examstips;

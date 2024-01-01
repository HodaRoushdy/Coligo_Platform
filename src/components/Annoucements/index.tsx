import { t } from "i18next";
import OneAnnouce from "../for_one_annouce";
import { AnnoucData } from "../Data";

const Annoucement = () => {
  const renderAnnouceData = AnnoucData.map((annouce) => <OneAnnouce annoucement={ annouce} />)
    return (
      <div className="flex flex-col space-y-5">
        <div className="flex justify-between items-center ">
          <div className="flex flex-col">
            <h1>{t("annouc")}</h1>
            <p className="text-gray-500 text-sm">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
          <div>
            <a
              href="#"
              style={{ textDecoration: "none" }}
              className="text-indigo-400 font-bold">
              {t("all")}
            </a>
          </div>
        </div>
        <div className="p-3">{renderAnnouceData}</div>
      </div>
    );
}

export default Annoucement
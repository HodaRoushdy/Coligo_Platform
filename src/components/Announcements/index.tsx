import { t } from "i18next";
import { AnnounceData } from "../Data";
import OneAnnounce from "../for_one_announce";

const Announcement = () => {
  const renderAnnouceData = AnnounceData.map((announce) => (
    <OneAnnounce announcement={announce} />
  ));
  return (
    <div className="flex flex-col space-y-5">
      <div className="flex justify-between items-center ">
        <div className="flex flex-col">
          <h1>{t("announce")}</h1>
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
};

export default Announcement;

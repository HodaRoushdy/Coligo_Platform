import { t } from "i18next";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PageRoutes } from "../Utils";
import OneAnnounce from "../for_one_announce";
import { IAnnResData, IData, IResWrapper } from "../interfaces";




const Announcement = () => {
  const [announcements, setAnnouncements] = useState<IData[]>([]);

  useEffect(() => {
    if (!announcements.length) {
      fetch("http://localhost:3000/api/announcements/")
        .then(async (res) => {
          return await res.json();
        })
        .then((data: IResWrapper<IAnnResData>) => {
          setAnnouncements(data.data.allAnnoucements);
        });
    }
  }, [announcements]);

  const renderAnnounceData = announcements.map((announce) => (
    <OneAnnounce announcement={announce} />
  ));

  return (
    <div className="space-y-2 bg-white rounded-lg p-2">
      <div className="flex justify-between items-center ">
        <div className="flex flex-col">
          <h1>{t("announce")}</h1>
          <p className="text-gray-500 text-sm">{t("lorem")}</p>
        </div>
        <div>
          <Link
            to={PageRoutes.Announcement}
            style={{ textDecoration: "none" }}
            className="text-indigo-400 font-bold"
          >
            {t("all")}
          </Link>
        </div>
      </div>

      <div className="p-1">{renderAnnounceData}</div>
    </div>
  );
};

export default Announcement;

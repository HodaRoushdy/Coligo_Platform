import { t } from "i18next";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IData } from "../Data";
import { PageRoutes } from "../Utils";
import OneAnnounce from "../for_one_announce";

interface IResData {
  allAnnoucements: IData[];
}
interface IWrapper {
  status: string;
  data: IResData;
}

const Announcement = () => {
  const [announcements, setAnnouncements] = useState<IData[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/announcements/")
      .then(async (res) => {
        console.log("respons:", res);
        console.log(await res.json());
        return await res.json();
      })
      .then((data: IWrapper) => {
        // console.log(data);
        console.log(data);
        setAnnouncements(data.data.allAnnoucements);
        alert(announcements);
      });
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
            className="text-indigo-400 font-bold">
            {t("all")}
          </Link>
        </div>
      </div>

      <div className="p-1">{renderAnnounceData}</div>
    </div>
  );
};

export default Announcement;

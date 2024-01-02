import { useEffect, useState } from "react";
// import OneAnnounce from "./for_one_announce";
import { IData } from "./Data";

interface IResData {
  allAnnoucements:IData[]
}
interface IWrapper {
    status: string,
    data:IResData
}

const Fetch = () => {
  const [Announcement, setAnnouncement] = useState<IData>({
    name: "",
    desc: "",
    image: "",
    imgAlt: "",
    annoucement: "",
  });

  useEffect(() => {
    fetch("http://localhost:3000/api/announcements/")
      .then(async (res) => {
        console.log("respons:", res);
        console.log(await res.json());
        return await res.json();
      })
      .then((data:IWrapper) => {
        // console.log(data);
        console.log(data);
        setAnnouncement(data.data.allAnnoucements);
        alert(Announcement);
      });
  }, [Announcement]);

  return (
    <div
      className="md:flex gap-x-2 p-3 divide-x divide-slate-200"
      data-testid={`announcement`}>
      <div className="">
        <div className="flex w-52 items-center">
          <div className="pr-3">
            <img
              className="rounded-full w-10 h-10"
              src={Announcement.image}
              alt={Announcement.imgAlt}
            />
          </div>

          <div>
            <h3>{Announcement.name}</h3>
            <span className="text-gray-400 text-sm">{Announcement.desc}</span>
          </div>
        </div>
      </div>

      <div className="pl-3">
        <div className="w-98">
          <p className="text-gray-400 text-sm">{Announcement.annoucement}</p>
        </div>
      </div>
    </div>
  );
};
export default Fetch;

//  {Announcement.map((photo) => (
//    <OneAnnounce announcement={Announcement} />
//   ))}

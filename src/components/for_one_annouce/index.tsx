// import { Divider, List, ListItem } from "@mui/material";

import { IData } from "../Data";

interface IProps {
  annoucement: IData;
}
const OneAnnouce = ({ annoucement }: IProps) => {
  return (
    <div className="md:flex space-x-2 p-4">
      <div className="border-r-2">
        <div className="flex w-52 items-center">
          <div className="pr-3">
            <img
              className="rounded-full w-10 h-10"
              src={annoucement.imgUrl}
              alt={annoucement.imgAlt}
            />
          </div>

          <div>
            <h3>{ annoucement.personName}</h3>
            <span className="text-gray-400 text-sm">{ annoucement.personDesc}</span>
          </div>
        </div>
      </div>

      <div className="pl-3">
        <div className="w-98">
          <p className="text-gray-400 text-sm">
            {annoucement.annouce}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OneAnnouce;

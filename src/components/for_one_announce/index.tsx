import { IData } from "../Data";
import Image from "../Image";

interface IProps {
  announcement: IData;
  index?:number
}
const OneAnnounce = ({ announcement: announcement,index}: IProps) => {
  return (
    <div className="md:flex space-x-2 p-4" data-testid={`announcement ${index}`}>
      <div className="border-r-2">
        <div className="flex w-52 items-center">
          <div className="pr-3">
            <Image
              className="rounded-full w-10 h-10"
              url={announcement.imgUrl}
              alt={announcement.imgAlt}
            />
          </div>

          <div>
            <h3>{announcement.personName}</h3>
            <span className="text-gray-400 text-sm">
              {announcement.personDesc}
            </span>
          </div>
        </div>
      </div>

      <div className="pl-3">
        <div className="w-98">
          <p className="text-gray-400 text-sm">{announcement.annouce}</p>
        </div>
      </div>
    </div>
  );
};

export default OneAnnounce;

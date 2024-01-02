import { IOneAnnounceProps } from "../interfaces";


const OneAnnounce = ({
  announcement: announcement,
  index,
}: IOneAnnounceProps) => {
  return (
    <div
      className="md:flex gap-x-2 p-3 divide-x divide-slate-200"
      data-testid={`announcement ${index}`}>
      <div className="">
        <div className="flex w-52 items-center">
          <div className="pr-3">
            <img
              className="rounded-full w-10 h-10"
              src={announcement.image}
              alt={announcement.imgAlt}
            />
          </div>

          <div>
            <h3>{announcement.name}</h3>
            <span className="text-gray-400 text-sm">{announcement.desc}</span>
          </div>
        </div>
      </div>

      <div className="pl-3">
        <div className="w-98">
          <p className="text-gray-400 text-sm">{announcement.annoucement}</p>
        </div>
      </div>
    </div>
  );
};

export default OneAnnounce;

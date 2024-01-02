import { render, screen } from "@testing-library/react";
import OneAnnounce from "../for_one_announce";
import { IData } from "../Data";
const announcement :IData= {
  image:
    "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  imgAlt: "man Announcement",
  name: "Mr.Ahmed Mostafa",
  desc: "Math 101",
  annoucement:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolor doloribus, magni ea, veniam placeat nemo ut asperiores optio, esse est quod cumque praesentium rerum.",
};
test("the component return data correctly", () => {
  render(<OneAnnounce announcement={announcement} />);
  const announceElement = screen.queryAllByText(/Mr.Ahmed Mostafa/i);
  expect(announceElement).toHaveLength(1);
});

// Announcements;

import { render, screen } from "@testing-library/react";
import Announcement from "../Announcements";

test("announcements component has a correct data", () => {
  render(<Announcement />);
  const AnnouncementElement = screen.queryAllByText(
    "Lorem ipsum dolor sit amet consectetur."
  );
  expect(AnnouncementElement).toHaveLength(1);
});

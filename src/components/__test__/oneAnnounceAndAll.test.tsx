import { screen, render } from "@testing-library/react";
import Announcement from "../Announcements";

describe("integration testing in ALL Announcements ", () => {
    test("test that the first announcement returned sucessfully",async () => {
        render(<Announcement />);
        const OneAnnouncementElement = await screen.findAllByTestId(/announcement/i);
        expect(OneAnnouncementElement).toHaveLength(4)
    })
})
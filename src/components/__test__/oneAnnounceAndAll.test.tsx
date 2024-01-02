import { render, screen } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter } from "react-router-dom";
import i18n from "../../Utils/i18n";
import Announcement from "../Announcements";

describe("integration testing in ALL Announcements ", () => {
  test("test that the first announcement returned sucessfully", async () => {
    render(
      <BrowserRouter>
        <I18nextProvider i18n={i18n}>
          <Announcement />
        </I18nextProvider>
      </BrowserRouter>
    );
    const OneAnnouncementElement = await screen.findAllByTestId(
      /announcement/i
    );
    expect(OneAnnouncementElement).toHaveLength(4);
  });
});

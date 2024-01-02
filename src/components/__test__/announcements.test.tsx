import { render, screen } from "@testing-library/react";
import { t } from "i18next";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter } from "react-router-dom";
import i18n from "../../Utils/i18n";
import Announcement from "../Announcements";

test("announcements component has a correct data", () => {
  render(
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        <Announcement />
      </I18nextProvider>
    </BrowserRouter>
  );
  const text = t("lorem");
  const AnnouncementElement = screen.queryAllByText(text);
  expect(AnnouncementElement).toHaveLength(1);
});

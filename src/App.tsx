import "@fontsource/roboto/700.css";
import "./App.css";
import ResponsiveDrawer from "./components/Drawer";
// import PrimarySearchAppBar from "./components/Header";

// import { t } from "i18next";
// import { changeLanguage} from "i18next";
// import { useTranslation } from "react-i18next";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Annouce from "./pages/annoucement";
import Courses from "./pages/courses";
import Dashboard from "./pages/dashboard";
import GradeBook from "./pages/grade_book";
import Home from "./pages/home";
import Performance from "./pages/performance";
import Schedule from "./pages/schedule";

// import { Switch } from "@mui/material";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<ResponsiveDrawer />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/gradebook" element={<GradeBook />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/annoucement" element={<Annouce />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

{
  /* <h2>{t("exams")}</h2> */
}
/* <button onClick={() => changeLanguage("en")}>english</button>
<h2>{t("exams")}</h2> */

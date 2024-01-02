import "@fontsource/roboto/700.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import ResponsiveDrawer from "./components/Drawer";
import { PageRoutes } from "./components/Utils";
import Announce from "./pages/announcement";
import Courses from "./pages/courses";
import Dashboard from "./pages/dashboard";
import GradeBook from "./pages/grade_book";
import Home from "./pages/home";
import Performance from "./pages/performance";
import Schedule from "./pages/schedule";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={PageRoutes.Home} element={<Home />} />
        <Route element={<ResponsiveDrawer />}>
          <Route path={PageRoutes.Dashboard} element={<Dashboard />} />
          <Route path={PageRoutes.Schedule} element={<Schedule />} />
          <Route path={PageRoutes.Gradebook} element={<GradeBook />} />
          <Route path={PageRoutes.Performance} element={<Performance />} />
          <Route path={PageRoutes.Courses} element={<Courses />} />
          <Route path={PageRoutes.Announcement} element={<Announce />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

import "@fontsource/roboto/700.css";
import "./App.css";
import ResponsiveDrawer from "./components/Drawer";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Annouce from "./pages/annoucement";
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

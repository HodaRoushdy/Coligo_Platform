import requireAuth from "../../Utils/require.auth";
import LabtopImage from "../../assets/spanish-lesson-1-05.svg";
import Announcement from "../../components/Announcements";
import ExamTips from "../../components/ExamsTips";
import WhatsDue from "../../components/WhatsDue";

const DashboardPage = () => {
  return (
    <div>
      <div
        className="bg-white rounded-lg p-7"
        style={{
          backgroundImage: `url(${LabtopImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
          backgroundSize: "520px",
        }}
      >
        <ExamTips />
      </div>

      <br />
      <div className="grid xl:grid-cols-4 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-x-6">
        <div className="xl:col-span-3 lg:col-span-4 md:col-span-4 sm:col-span-4">
          <div className="grid sm:grid-cols-1 md:grid-cols-1 bg-white rounded-lg p-2">
            <Announcement />
          </div>
          <br />
        </div>

        <div className="xl:col-span-1 lg:col-span-4 md:col-span-4 sm:col-span-4">
          <div className="grid md:grid-cols-1 lg:grid-cols-1 rounded-lg bg-white p-2 ">
            <WhatsDue />
          </div>
        </div>
      </div>
    </div>
  );
};
const Dashboard = requireAuth(DashboardPage);
export default Dashboard;

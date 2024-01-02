import requireAuth from "../../Utils/require.auth";
import Announcement from "../../components/Announcements";
import Examstips from "../../components/ExamsTips";
import WhatsDue from "../../components/WhatsDue";

const DashboardPage = () => {
  return (
    <div>
      <div className="bg-white rounded-lg p-7">
        <Examstips />
      </div>
      <br></br>
      <div className="md:flex space-x-3  ">
        <div className="grid sm:grid-cols-1 md:grid-cols-1">
          <div className="bg-white rounded-lg p-4 ">
            <Announcement />
          </div>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 rounded-lg bg-white p-2">
          <WhatsDue />
        </div>
      </div>
    </div>
  );
};
const Dashboard = requireAuth(DashboardPage);
export default Dashboard;

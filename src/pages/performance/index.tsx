import { t } from "i18next";
import requireAuth from "../../Utils/require.auth";

const PerformancePage = () => {
  return (
    <div className="grid sm:grid-cols-1 xl:grid-cols-1">
      <div className="flex items-center justify-center h-screen bg-indigo-400">
        <div className="bg-white p-8 shadow-2xl rounded-md border-indigo-900 outline-none">
          <h1 className="font-bold text-violet-950 text-3xl text-center">
            {t("performance.page.title")}
          </h1>
        </div>
      </div>
    </div>
  );
};
const Performance = requireAuth(PerformancePage);
export default Performance;

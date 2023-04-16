import { Outlet } from "react-router";
import TopNavigation from "./leftSection/TopNavigation";

function HomePages() {
  return (
    <div className="flex flex-row w-screen h-screen bg-purple-400">
      <div className="w-screen h-full  absolute md:relative bg-slate-500">
        <TopNavigation />
        <div className="w-full h-full">
          <Outlet />
        </div>
      </div>
      <div className="opacity-0 bg-orange-400 md:w-2/5 xl:w-2/5 sm:opacity-100 sm:visible">
        This is for the USER
      </div>
    </div>
  );
}

export default HomePages;

import { Outlet } from "react-router";
import TopNavigation from "./leftSection/TopNavigation";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase-config";

function HomePages() {
  const navigate = useNavigate();

  const logOut = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div className="flex flex-row w-screen h-screen bg-purple-400">
      <div className="w-screen h-full  absolute md:relative bg-slate-500">
        <TopNavigation />
        <div className="w-full h-full">
          <Outlet />
        </div>
      </div>
      <div className="opacity-0 bg-orange-400 md:w-2/5 xl:w-2/5 sm:opacity-100 sm:visible">
        <div>
          <h1>Welcome</h1>  
          <button onClick={() => logOut()}>Sign Out</button>
        </div>
      </div>
    </div>
  );
}

export default HomePages;

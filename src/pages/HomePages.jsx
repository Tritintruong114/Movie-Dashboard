import { Outlet } from "react-router";
import TopNavigation from "./leftSection/TopNavigation";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase-config";
import { UilSignout } from "@iconscout/react-unicons";
function HomePages() {
  const navigate = useNavigate();

  const logOut = async () => {
    await signOut(auth);
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="flex flex-row w-screen h-screen ">
      <div className="w-screen h-full  absolute md:relative">
        <TopNavigation />
        <div className="w-full h-full overflow-auto">
          <Outlet />
        </div>
      </div>
      <div className="opacity-0 font-poppins p-3  md:w-2/5 xl:w-2/5 md:opacity-100 md :visible">
        {!localStorage.getItem("display name") &&
        !localStorage.getItem("email") ? (
          <Link to={"/login"}>
            <button>Login</button>
          </Link>
        ) : (
          <div className="flex gap-2 flex-col justify-center items-center">
            <h1 className="font-bold text-md text-red-900">Welcome back</h1>
            <div className="flex items-center gap-1">
              <p className="text-xs font-light text-opacity-60 border-b border-red-900">
                {localStorage.getItem("display name")
                  ? localStorage.getItem("display name")
                  : localStorage.getItem("email")}
              </p>
              <button
                className="text-sm text-red-900 rounded-full"
                onClick={() => logOut()}
              >
                <UilSignout />
              </button>
            </div>
            <div>ABC</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePages;

import { Outlet } from "react-router";
import TopNavigation from "./leftSection/TopNavigation";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase-config";
import { UilSignout } from "@iconscout/react-unicons";
import Community from "./Community";
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
        <div className="w-full h-screen overflow-hidden md:overflow-auto xl:overflow-auto">
          <Outlet />
        </div>
      </div>
      <div className="opacity-0 font-poppins p-3 md:w-2/5 xl:w-2/5 md:opacity-100 md :visible">
        {!localStorage.getItem("display name") &&
        !localStorage.getItem("email") ? (
          <div className="flex  relative h-full rounded-3xl  w-full items-center justify-center flex-col">
            <div className="h-full w-full absolute z-0">
              <div className="w-full h-full bg-black rounded-3xl absolute opacity-20"></div>
              <img
                src="https://e0.pxfuel.com/wallpapers/260/555/desktop-wallpaper-power-rangers-background-power-rangers-mobile.jpg"
                className="h-full w-full object-cover rounded-3xl"
              ></img>
            </div>
            <div className="w-3/4 text-left flex flex-col gap-3 z-10">
              <h1 className="xl:text-3xl md:text-xl font-bold w-2/3 text-white">
                Join Our Community.
              </h1>
              <Link to={"/login"}>
                <button className="bg-white font-bold text-red-950 px-3 py-1 rounded-full">
                  Login
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="flex gap-2 flex-col justify-center items-center h-full">
            <div className="w-full flex items-center justify-center p-3 ">
              <h1 className="font-bold text-xl text-left w-full text-red-900">
                Welcome
              </h1>
              <div className="flex gap-1 justify-center items-center">
                <p className="text-xs font-bold  border-red-900 w-full">
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
            </div>

            <div className="h-full w-full flex items-center justify-center">
              <Community />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePages;

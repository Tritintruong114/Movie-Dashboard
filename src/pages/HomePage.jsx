import TopNavigation from "./leftSection/TopNavigation";

function HomePage() {
  return (
    <div className="flex flex-row w-screen h-screen">
      <div className="w-screen h-full absolute md:relative bg-slate-500">
        <TopNavigation />
      </div>
      <div className="opacity-0 md:w-1/3 xl:w-1/3 sm:opacity-100 sm:visible">
        This is for the USER
      </div>
    </div>
  );
}

export default HomePage;

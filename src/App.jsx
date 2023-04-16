import { Outlet } from "react-router";

function App() {
  return (
    <div className="App w-full h-screen overflow-hidden flex items-center justify-center">
      <Outlet />
    </div>
  );
}

export default App;

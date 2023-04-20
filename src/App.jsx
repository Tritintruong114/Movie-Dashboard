import { Outlet } from "react-router";
import { GlobalProvider } from "./context/GlobalState";
function App() {
  return (
    <div className="App w-full h-screen overflow-hidden flex items-center justify-center">
      <Outlet />
    </div>
  );
}

export default App;

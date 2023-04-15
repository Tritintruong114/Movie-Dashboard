import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { MovieDataProvider } from "./contexts/MovieDashBoardContext";

//Login de o tren MovieProvider
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MovieDataProvider>
      <App />
    </MovieDataProvider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { MovieDataProvider } from "./contexts/MovieDashBoardContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MovieDataProvider>
      <RouterProvider router={router} />
    </MovieDataProvider>
  </React.StrictMode>
);

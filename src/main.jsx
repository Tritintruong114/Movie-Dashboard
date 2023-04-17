import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { MovieDataProvider } from "./contexts/MovieDashBoardContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePages from "./pages/HomePages";
import NewsMoviePage from "./pages/NewsMoviePage";
import CartoonsPage from "./pages/CartoonsPage";
import SeriesPage from "./pages/SeriesPage";
import MoviesPage from "./pages/MoviesPage";
import Home from "./pages/Home";
import Login from "./components/user/Login";
import Signup from "./components/user/Signup";
import Success from "./components/user/Success";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: "/",
        element: <HomePages />,
        children: [
          {
            index: "home",
            element: <Home />,
          },
          {
            path: "news",
            element: <NewsMoviePage />,
          },
          {
            path: "cartoons",
            element: <CartoonsPage />,
          },
          {
            path: "series",
            element: <SeriesPage />,
          },
          {
            path: "movies",
            element: <MoviesPage />,
          },
        ],
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        index: true,
        element: <HomePages />,
      },
      {
        path: "success",
        element: <Success />,
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

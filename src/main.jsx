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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "home",
        element: <HomePages />,
        children: [
          {
            index: true,
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

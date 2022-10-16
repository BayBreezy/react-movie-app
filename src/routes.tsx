import { createBrowserRouter } from "react-router-dom";
import { getConfiguration, getNowPlaying, getPopular, getMovieDetails } from "./api/movies";
import Home from "./pages/Home";
import { MovieDetails } from "./pages/MovieDetails";
import { Root } from "./pages/Root";

// create router
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: getConfiguration,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => {
          const config = await getConfiguration();
          const popular = await getPopular();
          const movies = await getNowPlaying();
          return { movies, config, popular };
        },
      },
      {
        path: ":id",
        element: <MovieDetails />,
        loader: async ({ params }) => {
          return await getMovieDetails(params.id as string);
        },
      },
    ],
  },
]);

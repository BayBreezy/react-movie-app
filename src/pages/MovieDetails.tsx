import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getConfiguration } from "../api/movies";
import { ICast, IMovieDetails, IPosterBackdrop, IVideo } from "../types";
import dayjs from "dayjs";
import { MovieGenres } from "../components/MovieGenres";
import { MovieOverview } from "../components/MovieOverview";
import { MovieCast } from "../components/MovieCast";
import { MovieVideos } from "../components/MovieVideos";
import { useConfigContext } from "../context/ConfigContext";
import { useSetTitle } from "../hooks/useSetTitle";

export const MovieDetails = () => {
  const movie = useLoaderData() as IMovieDetails;

  const config = useConfigContext();
  useSetTitle(movie.title);

  if (!movie) {
    return <p>Loading movie...</p>;
  }
  return (
    <main className="lg:mt-12 pb-10 max-w-6xl mx-auto">
      <div className="relative">
        <img
          src={`${config?.large_poster}${movie.poster_path}`}
          alt={`${movie.title}`}
          className="object-cover w-full lg:h-[60vh] lg:rounded-3xl"
        />
      </div>
      <div className="mt-5 px-5">
        <h1 className="font-medium text-4xl">{movie.title}</h1>
        {movie.tagline && <p className="mt-3 text-gray-700 text-lg font-light">{movie.tagline}</p>}
        <p className="font-light text-sm text-gray-500 mt-3">
          Release date: {dayjs(movie.release_date).format("MMM DD, YYYY")}
        </p>
        <div className="flex items-center space-x-3 mt-3">
          {movie.genres?.map((g) => (
            <MovieGenres key={g.id} genre={g} />
          ))}
        </div>
        {movie.overview && (
          <div className="mt-7">
            <MovieOverview overview={movie.overview} />
          </div>
        )}
        {movie.credits?.cast && movie.credits?.cast.length > 0 && (
          <MovieCast title="Cast" actors={movie.credits?.cast} />
        )}
        {movie.videos?.results && movie.videos?.results.length > 0 && (
          <MovieVideos videos={movie.videos?.results} />
        )}
      </div>
    </main>
  );
};

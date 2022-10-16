import { Link, useLoaderData } from "react-router-dom";
import { IMovie } from "../types";
import dayjs from "dayjs";
import { useConfigContext } from "../context/ConfigContext";

export const MovieCard = (props: { movie: IMovie }) => {
  const movie = props.movie;
  const config = useConfigContext();

  if (!!!config) {
    return <></>;
  }

  return (
    <div className="lg:p-2">
      <Link to={`${movie.id}`}>
        <img
          src={`${config?.poster}${movie.poster_path}`}
          alt={`${movie.title}`}
          className="object-cover w-full h-[350px] lg:h-[450px] rounded-xl"
        />
        <div className="mt-2 px-3">
          <h1 className="lg:text-xl font-medium">{movie.title}</h1>
          <p className="font-light text-sm lg:mt-2 text-gray-500">
            Realese date: {dayjs(movie.release_date).format("MMM DD, YYYY")}
          </p>
        </div>
      </Link>
    </div>
  );
};

import React from "react";
import { IGenre } from "../types";

export const MovieGenres = (props: { genre: IGenre }) => {
  const genre = props.genre;
  return (
    <span className="inline-block capitalize bg-gray-100 rounded-full px-3 py-2 text-sm font-light">
      {genre.name}
    </span>
  );
};

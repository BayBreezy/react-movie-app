import React from "react";

export const MovieOverview = (props: { overview: string }) => {
  const overview = props.overview;
  return (
    <>
      <h1 className="font-medium text-2xl text-gray-700 mb-5">Overview</h1>
      <p className="whitespace-pre-line text-gray-600 font-light">{overview}</p>
    </>
  );
};

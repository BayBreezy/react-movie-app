import React from "react";
import YouTube, { YouTubeProps } from "react-youtube";
import { IVideo } from "../types";

export const MovieVideos = (props: { videos: IVideo[] }) => {
  const { videos } = props;
  return (
    <>
      <h1 className="font-medium text-2xl text-gray-700 mb-5">Videos</h1>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
        {videos.map((v) => {
          if (v.site == "YouTube" && v.official) {
            return (
              <div className="rounded-lg overflow-hidden">
                <YouTube className="w-full" id={v.id} videoId={v.key} />
              </div>
            );
          }
        })}
      </div>
    </>
  );
};

import { Swiper, SwiperSlide, SwiperProps, useSwiper } from "swiper/react";
import { Autoplay, Swiper as SwiperParentType } from "swiper";
import "swiper/css";
import { ICast, IMovie, IPosterBackdrop } from "../types";
import { MovieCard } from "./MovieCard";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { getConfiguration } from "../api/movies";
import { useConfigContext } from "../context/ConfigContext";

export const MovieCast = (props: { actors: ICast[]; title: string }) => {
  // Destructure vars from props
  const { actors, title } = props;
  const config = useConfigContext();

  // Swiper instance
  const [swiperInstance, setSwiperInstance] = useState<SwiperParentType>();

  // Declare breakpoints for swiper
  const swiperOptions: SwiperProps = {
    breakpoints: {
      320: { slidesPerView: 2, spaceBetween: 5 },
      750: { slidesPerView: 3, spaceBetween: 10 },
      1190: { slidesPerView: 6, spaceBetween: 10 },
    },
  };
  return (
    <>
      <div className="flex justify-between items-center lg:mb-10 mb-5 mt-10">
        <h1 className="font-medium text-2xl text-gray-700">{title}</h1>
        <div className="flex items-center space-x-3">
          <button
            onClick={() => swiperInstance?.slidePrev()}
            className="rounded-full h-12 w-12 flex justify-center items-center border hover:border-gray-500 transition duration-300 outline-none p-2"
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </button>
          <button
            onClick={() => swiperInstance?.slideNext()}
            className="rounded-full h-12 w-12 flex justify-center items-center border hover:border-gray-500 transition duration-300 outline-none p-2"
          >
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
      <Swiper
        onSwiper={(swipe) => setSwiperInstance(swipe)}
        autoplay={{ delay: 7000 }}
        modules={[Autoplay]}
        spaceBetween={10}
        grabCursor
        loop
        slidesPerView={1}
        breakpoints={swiperOptions.breakpoints}
      >
        {actors.map((a) => {
          if (config && config.profile && a.profile_path) {
            return (
              <SwiperSlide className="w-full" key={a.id}>
                <div>
                  <img
                    className="w-full object-cover lg:h-auto h-[200px] rounded-md lg:rounded-lg"
                    src={`${config?.profile}${a.profile_path}`}
                    alt={`${a.name}'s IMage`}
                  />
                  <div className="p-2">
                    <h2 className="font-medium">{a.character}</h2>
                    <p className="text-sm text-gray-500 font-light">{a.name}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          }
        })}
      </Swiper>
    </>
  );
};

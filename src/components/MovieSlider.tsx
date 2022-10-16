import { Swiper, SwiperSlide, SwiperProps, useSwiper } from "swiper/react";
import { Autoplay, Swiper as SwiperParentType } from "swiper";
import "swiper/css";
import { IMovie } from "../types";
import { MovieCard } from "./MovieCard";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export const MovieSlider = (props: { movies: IMovie[]; title: string }) => {
  // Destructure vars from props
  const { movies, title } = props;

  // Swiper instance
  const [swiperInstance, setSwiperInstance] = useState<SwiperParentType>();

  // Declare breakpoints for swiper
  const swiperOptions: SwiperProps = {
    breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 0 },
      750: { slidesPerView: 2, spaceBetween: 10 },
      1190: { slidesPerView: 3, spaceBetween: 0 },
    },
  };
  return (
    <>
      <div className="flex justify-between items-center lg:mb-10 mb-5">
        <h1 className="md:text-4xl text-2xl font-semibold">{title}</h1>
        <div className="flex items-center space-x-3">
          <button
            onClick={() => swiperInstance?.slidePrev()}
            className="rounded-full lg:h-12 h-10 w-10 lg:w-12  flex justify-center items-center border hover:border-gray-500 transition duration-300 outline-none p-2"
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </button>
          <button
            onClick={() => swiperInstance?.slideNext()}
            className="rounded-full lg:h-12 h-10 w-10 lg:w-12  flex justify-center items-center border hover:border-gray-500 transition duration-300 outline-none p-2"
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
        {movies.map((m) => (
          <SwiperSlide className="w-full" key={m.id}>
            <MovieCard movie={m} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

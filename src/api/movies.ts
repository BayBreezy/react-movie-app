import axios, { AxiosError } from "axios";
import { AxiosErrorHandler } from "../components/AxiosErrorToast";
import { IConfiguration, IConfigurationResponse, INowPlayingResponse, IMovieDetails } from "../types";
import dayjs from "dayjs";

// get env vars
const baseURL = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

// Create axios instance that will be used to get data
const instance = axios.create({
  baseURL,
  params: {
    api_key: apiKey,
  },
});

/**
 * Method used to get all of the movies that are now playing in cinema
 */
export const getNowPlaying = async () => {
  try {
    const { data } = await instance.get<INowPlayingResponse>("movie/now_playing");
    return data.results;
  } catch (error: any) {
    AxiosErrorHandler(error);
    console.log(error.response);
  }
};
/**
 * Method used to get all of the popular movies
 */
export const getPopular = async () => {
  try {
    const { data } = await instance.get<INowPlayingResponse>("movie/popular");
    return data.results;
  } catch (error: any) {
    AxiosErrorHandler(error);
    console.log(error.response);
  }
};

/**
 * Method used to search for movies
 */
export const searchMovie = async (term: string) => {
  try {
    const { data } = await instance.get<INowPlayingResponse>("search/movie", {
      params: {
        query: term,
      },
    });
    return data.results;
  } catch (error: any) {
    AxiosErrorHandler(error);
    console.log(error.response);
  }
};
/**
 * Method used to get details of the movie
 */
export const getMovieDetails = async (id: string) => {
  try {
    const { data } = await instance.get<IMovieDetails>(
      `movie/${id}?append_to_response=videos,images,credits`
    );
    return data;
  } catch (error: any) {
    AxiosErrorHandler(error);
    console.log(error.response);
  }
};

/**
 * Method used to cache config object
 * @param configuration - Configuration object to be stored
 */
const cacheConfiguration = (configuration: IConfiguration) => {
  //set the configuration
  localStorage.setItem("configuration", JSON.stringify(configuration));
  //set the next date that it should be updated
  localStorage.setItem("configTime", dayjs().add(10, "days").format("YYYY-MM-DD"));
};

export const getConfigCache = () => {
  // Get config from storage
  let config = localStorage.getItem("configuration");
  let updatedConfig = {} as IConfiguration;
  if (typeof config == "string") {
    // parse object if it exists
    updatedConfig = JSON.parse(config) as IConfiguration;
  }
  //Get the next update date from storage
  const configTime = localStorage.getItem("configTime");
  return { updatedConfig, configTime };
};

export const getConfiguration = async () => {
  try {
    // Check if config is cached
    const { updatedConfig: config, configTime } = getConfigCache();
    // check if configTime has expired
    let timeToUpdate = !!configTime && dayjs().isAfter(dayjs(configTime));

    // variable used to store values that will be returned
    let poster, backdrop, large_poster, large_backdrop, profile;

    // if none of theme exist, send request and cache it
    if (!!!config || !!!configTime || timeToUpdate) {
      const { data } = await instance.get<IConfigurationResponse>("configuration");
      cacheConfiguration(data.images);

      // set vars
      poster = `${data.images.secure_base_url}${
        // @ts-ignore
        data.images.poster_sizes[data.images.poster_sizes?.length - 2]
      }`;
      backdrop = `${data.images.secure_base_url}${
        // @ts-ignore
        data.images.backdrop_sizes[data.images.backdrop_sizes?.length - 2]
      }`;
      large_poster = `${data.images.secure_base_url}${
        // @ts-ignore
        data.images.poster_sizes[data.images.poster_sizes?.length - 1]
      }`;
      large_backdrop = `${data.images.secure_base_url}${
        // @ts-ignore
        data.images.backdrop_sizes[data.images.backdrop_sizes?.length - 1]
      }`;
      profile = `${data.images.secure_base_url}${
        // @ts-ignore
        data.images.profile_sizes[data.images.profile_sizes?.length - 1]
      }`;
    } else {
      // set vars
      poster = `${config.secure_base_url}${
        // @ts-ignore
        config.poster_sizes[config.poster_sizes?.length - 2]
      }`;
      backdrop = `${config.secure_base_url}${
        // @ts-ignore
        config.backdrop_sizes[config.backdrop_sizes?.length - 2]
      }`;
      large_poster = `${config.secure_base_url}${
        // @ts-ignore
        config.poster_sizes[config.poster_sizes?.length - 1]
      }`;
      large_backdrop = `${config.secure_base_url}${
        // @ts-ignore
        config.backdrop_sizes[config.backdrop_sizes?.length - 1]
      }`;
      profile = `${config.secure_base_url}${
        // @ts-ignore
        config.profile_sizes[config.profile_sizes?.length - 1]
      }`;
    }

    return { poster, backdrop, large_backdrop, large_poster, profile };
  } catch (error: any) {
    AxiosErrorHandler(error);
  }
};

export interface INowPlayingResponse {
  page: number;
  results: IMovie[];
  dates: IDates;
  total_pages: number;
  total_results: number;
}

export interface IMovie {
  poster_path?: string;
  adult: boolean;
  overview?: string;
  release_date?: string;
  genre_ids?: number[];
  id: number;
  original_title: string;
  original_language?: string;
  title: string;
  backdrop_path?: string;
  popularity?: number;
  vote_count?: number;
  video?: boolean;
  vote_average?: number;
}

export interface IDates {
  maximum?: string;
  minimum?: string;
}

export interface IMovieDetails {
  adult?: boolean;
  backdrop_path?: string;
  belongs_to_collection: any;
  budget?: number;
  genres?: IGenre[];
  homepage?: string;
  id: number;
  imdb_id: string;
  original_language?: string;
  original_title: string;
  overview?: string;
  popularity: number;
  poster_path?: any;
  production_companies?: IProductionCompany[];
  production_countries?: IProductionCountry[];
  release_date?: string;
  revenue: number;
  runtime: number;
  spoken_languages?: ISpokenLanguage[];
  status?: string;
  tagline?: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  videos?: IVideoResponse;
  images?: IMovieMedia;
  credits?: ICastResponse;
}

export interface IMovieMedia {
  backdrops?: [];
  logos?: [];
  posters?: [];
  [key: string]: any;
}

export interface IGenre {
  id: number;
  name: string;
}

export interface IProductionCompany {
  id: number;
  logo_path?: string;
  name: string;
  origin_country: string;
}

export interface IProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface ISpokenLanguage {
  iso_639_1: string;
  name: string;
}

export interface IConfigurationResponse {
  images: IConfiguration;
  change_keys: string[];
}

export interface IConfiguration {
  base_url: string;
  secure_base_url: string;
  backdrop_sizes?: string[];
  logo_sizes?: string[];
  poster_sizes?: string[];
  profile_sizes?: string[];
  still_sizes?: string[];
}

export interface IPosterBackdrop {
  poster: string;
  backdrop: string;
  large_backdrop?: string;
  large_poster?: string;
  profile?: string;
}

export interface ICastResponse {
  id: number;
  cast: ICast[];
  crew: ICrew[];
}

export interface ICast {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path?: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

export interface ICrew {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path?: string;
  credit_id: string;
  department: string;
  job: string;
}

export interface IVideoResponse {
  id: number;
  results: IVideo[];
}

export interface IVideo {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}

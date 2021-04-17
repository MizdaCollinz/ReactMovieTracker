import axios, { AxiosResponse } from "axios";
import querystring from "querystring";
import { useQuery } from "react-query";

const POSTER_HOST_URL = "https://image.tmdb.org/t/p/w185";
const SEARCH_API_URL = `https://api.themoviedb.org/3/search/movie/`;

export interface Movie {
  poster_path?: string | null;
  overview?: string;
  release_date?: string;
  genre_ids?: number[];
  id?: number;
  title?: string;
  vote_average?: number;
  vote_count?: number;
}

interface MoviesResponse {
  results: Movie[];
}

const getMovies = (query: string) => {
  const api_key = process.env.REACT_APP_API_KEY;
  return axios
    .get<MoviesResponse>(
      `${SEARCH_API_URL}?${querystring.stringify({ api_key, query })}`
    )
    .then((response: AxiosResponse<MoviesResponse>) =>
      response.data.results.map((movie) => {
        const { poster_path } = movie;
        return {
          ...movie,
          // Prepend the poster url host
          poster_path: poster_path
            ? `${POSTER_HOST_URL}${poster_path}`
            : poster_path,
        };
      })
    )
    .catch((error) => console.log(error));
};

export const useMovies = (query: string) => {
  return useQuery(`movies/${query}`, () => getMovies(query), {
    enabled: !!query && query.length > 0,
  });
};

import axios, { endpoints } from "@/helpers/axios";
import useSWR from "swr";

export default function useMovie() {
  const getFetcher = (url: string) => axios.get(url).then((res) => res.data);
  const postFetcher = (url: string) => axios.post(url).then((res) => res.data);
  const putFetcher = (url: string) => axios.put(url).then((res) => res.data);

  function getNowPlayingMovie() {
    const { data, isLoading, error } = useSWR(
      endpoints.movie.now_playing,
      getFetcher
    );

    return { now_playing: data, isLoading, error };
  }

  function getPopularMovie() {
    const { data, isLoading, error } = useSWR(
      endpoints.movie.popular,
      getFetcher
    );

    return { popular: data, isLoading, error };
  }

  function getTopRatedMovie() {
    const { data, isLoading, error } = useSWR(
      endpoints.movie.top_rated,
      getFetcher
    );

    return { top_rated: data, isLoading, error };
  }

  function getUpcomingMovie() {
    const { data, isLoading, error } = useSWR(
      endpoints.movie.upcoming,
      getFetcher
    );

    return { upcoming: data, isLoading, error };
  }

  return {
    getNowPlayingMovie,
    getPopularMovie,
    getTopRatedMovie,
    getUpcomingMovie,
  };
}

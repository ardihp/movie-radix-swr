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

  return {
    getNowPlayingMovie,
  };
}

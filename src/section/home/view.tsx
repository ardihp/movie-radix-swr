"use client";

import { Flex, Text } from "@radix-ui/themes";
import React, { useEffect, useState } from "react";
import HeaderHome from "./components/header";
import useMovie from "@/hooks/use-movie";
import { MovieDetail } from "@/types/movie";
import Loader from "@/layout/loader";
import ContentList from "./components/content-list";

export default function HomeView() {
  const { getNowPlayingMovie } = useMovie();
  const { now_playing, error, isLoading } = getNowPlayingMovie();
  const [randomMovie, setRandomMovie] = useState<MovieDetail>({
    adult: false,
    backdrop_path: "",
    genre_ids: [],
    id: 0,
    poster_path: "",
    release_date: "",
    title: "",
    overview: "",
    vote_average: 0,
  });

  useEffect(() => {
    if (!isLoading && !error) {
      setRandomMovie(
        now_playing?.results[Number(Math.random() * 19).toFixed()]
      );
    }
  }, [isLoading]);

  return isLoading ? (
    <Loader />
  ) : (
    <Flex direction="column" style={{ overflow: "hidden" }}>
      <HeaderHome randomMovie={randomMovie} />

      <ContentList />
    </Flex>
  );
}

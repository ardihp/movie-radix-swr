"use client";

import React from "react";
import { Flex } from "@radix-ui/themes";
import "./content-list.scss";
import useMovie from "@/hooks/use-movie";
import dynamic from "next/dynamic";

const ListMovie = dynamic(() => import("./list-movie"));

export default function ContentList() {
  const {
    getNowPlayingMovie,
    getPopularMovie,
    getTopRatedMovie,
    getUpcomingMovie,
  } = useMovie();

  const { now_playing, isLoading: loadingNowPlaying } = getNowPlayingMovie();
  const { popular, isLoading: loadingPopular } = getPopularMovie();
  const { top_rated, isLoading: loadingTopRated } = getTopRatedMovie();
  const { upcoming, isLoading: loadingUpcoming } = getUpcomingMovie();

  return (
    <Flex direction="column" className="content-list">
      <ListMovie
        title="Now Playing"
        isLoading={loadingNowPlaying}
        data={now_playing?.results}
      />
      <ListMovie
        title="Popular"
        isLoading={loadingPopular}
        data={popular?.results}
      />
      <ListMovie
        title="Top Rated"
        isLoading={loadingTopRated}
        data={top_rated?.results}
      />
      <ListMovie
        title="Upcoming"
        isLoading={loadingUpcoming}
        data={upcoming?.results}
      />
    </Flex>
  );
}

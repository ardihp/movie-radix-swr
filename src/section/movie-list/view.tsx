"use client";

import { Box } from "@radix-ui/themes";
import React from "react";
import ItemMovie from "./components/item-movie";
import useMovie from "@/hooks/use-movie";
import { MovieDetail } from "@/types/movie";
import "./view.scss";
import Loader from "@/layout/loader";

export default function MovieListView() {
  const { getTrendingMovies } = useMovie();
  const { trendingMovies, isLoading } = getTrendingMovies("?page=1");

  return isLoading ? (
    <Loader />
  ) : (
    <Box className="grid-movie">
      {trendingMovies?.results.map((item: MovieDetail, key: number) => (
        <Box
          key={key}
          className={`content-item ${
            ["long-1", "long-2", "long-3"]?.[Math.floor(Math.random() * 3)]
          }`}
        >
          <ItemMovie item={item} itemKey={key} />
        </Box>
      ))}
    </Box>
  );
}

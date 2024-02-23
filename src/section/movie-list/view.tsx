"use client";

import { Box } from "@radix-ui/themes";
import React, { useState } from "react";
import ItemMovie from "./components/item-movie";
import useMovie from "@/hooks/use-movie";
import { MovieDetail } from "@/types/movie";
import "./view.scss";
import Loader from "@/layout/loader";
import InfiniteScroll from "react-infinite-scroll-component";

export default function MovieListView() {
  const { getTrendingMovies } = useMovie();
  const [page, setPage] = useState(1);
  const { trendingMovies, isLoading } = getTrendingMovies(`?page=${page}`);

  return isLoading ? (
    <Loader />
  ) : (
    <InfiniteScroll
      dataLength={trendingMovies?.results?.length}
      next={() => setPage((prevPage) => prevPage + 1)}
      hasMore={true}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      <Box className="grid-movie">
        {trendingMovies?.results.map((item: MovieDetail, key: number) => (
          <Box
            key={key}
            className={`content-item ${
              ["long-1", "long-2", "long-3"]?.[Math.floor(Math.random() * 3)]
            }`}
          >
            <ItemMovie item={item} itemKey={key} />
            {key + 1 === trendingMovies?.results?.length && "last"}
          </Box>
        ))}
      </Box>
    </InfiniteScroll>
  );
}

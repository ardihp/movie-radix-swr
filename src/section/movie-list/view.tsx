"use client";

import { Box } from "@radix-ui/themes";
import React, { useEffect, useState } from "react";
import ItemMovie from "./components/item-movie";
import useMovie from "@/hooks/use-movie";
import { MovieDetail } from "@/types/movie";
import "./view.scss";
import Loader from "@/layout/loader";
import InfiniteScroll from "react-infinite-scroll-component";

interface ResponseGetTrendingMovies {
  trendingMovies: { results: [] };
  isLoading: boolean;
}

export default function MovieListView() {
  const { getTrendingMovies } = useMovie();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const { trendingMovies, isLoading }: ResponseGetTrendingMovies =
    getTrendingMovies(`?page=${page}`);
  const [lists, setList] = useState([]);

  useEffect(() => {
    if (!isLoading) {
      setLoading(false);
      setList((prevVal) => [...prevVal, ...trendingMovies?.results]);
    }
  }, [isLoading]);

  return loading ? (
    <Loader />
  ) : (
    <InfiniteScroll
      dataLength={trendingMovies?.results?.length}
      next={() => setPage((prevPage) => prevPage + 1)}
      hasMore={true}
      loader={<h4 style={{ color: "white" }}>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      <Box className="grid-movie">
        {lists.map((item: MovieDetail, key: number) => (
          <Box key={key} className="content-item">
            <ItemMovie item={item} itemKey={key} />
          </Box>
        ))}
      </Box>
    </InfiniteScroll>
  );
}

import React from "react";
import { Flex, Text } from "@radix-ui/themes";
import { MovieDetail } from "@/types/movie";
import "./list-movie.scss";
import Image from "next/image";
import { HOST_DOMAIN_ASSETS } from "@/config-global";

interface ListMovieProps {
  title: string;
  isLoading: boolean;
  data: Array<MovieDetail>;
}

export default function ListMovie({ title, isLoading, data }: ListMovieProps) {
  return (
    <Flex direction="column" className="list-movie">
      <Text className="top-text">{title}</Text>
      {isLoading ? (
        <Text>Loading data...</Text>
      ) : (
        <Flex direction="row" className="section-list">
          {data?.length >= 1 ? (
            data
              ?.filter((_, key) => key < 5)
              ?.map((item, key) => (
                <Flex key={key} direction="column" className="item-list">
                  <Image
                    src={HOST_DOMAIN_ASSETS + item.poster_path}
                    className="movie-image"
                    fill
                    loading="lazy"
                    alt={item.title}
                  />

                  <Flex direction="column" className="movie-detail">
                    <Text className="title-ori">{item?.original_title}</Text>
                    <Text className="title">{item.title}</Text>
                  </Flex>
                </Flex>
              ))
          ) : (
            <Text>Tidak ada data</Text>
          )}
        </Flex>
      )}
    </Flex>
  );
}

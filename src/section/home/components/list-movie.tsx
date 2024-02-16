import React from "react";
import { Flex, Text } from "@radix-ui/themes";
import { MovieDetail } from "@/types/movie";
import Image from "next/image";
import { HOST_DOMAIN_ASSETS } from "@/config-global";
import Flickity from "react-flickity-component";
import "./list-movie.scss";
import "flickity/css/flickity.css";

interface ListMovieProps {
  title: string;
  isLoading: boolean;
  data: Array<MovieDetail>;
}

const carouselOption = {
  pageDots: false,
  lazyLoad: true,
  selectedAttraction: 0.01,
  friction: 0.15,
  wrapAround: true,
  groupCells: 7,
};

export default function ListMovie({ title, isLoading, data }: ListMovieProps) {
  return (
    <Flex direction="column" className="list-movie" id={title}>
      <Text className="top-text">{title}</Text>
      {isLoading ? (
        <Flex className="section-list">
          <Text>Loading Data...</Text>
        </Flex>
      ) : (
        <Flickity
          className="section-list"
          options={carouselOption}
          reloadOnUpdate
        >
          {data?.length >= 1 ? (
            data?.map((item, key) => (
              <Flex key={key} direction="column" className="item-list">
                <Image
                  src={HOST_DOMAIN_ASSETS + item.poster_path}
                  className="movie-image"
                  fill
                  placeholder="blur"
                  blurDataURL={HOST_DOMAIN_ASSETS + item.backdrop_path}
                  sizes="100%"
                  priority={false}
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
        </Flickity>
      )}
    </Flex>
  );
}

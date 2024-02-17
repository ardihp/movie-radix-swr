import React, { useState } from "react";
import { Box, Flex, IconButton, Text } from "@radix-ui/themes";
import { MovieDetail } from "@/types/movie";
import Image from "next/image";
import { HOST_DOMAIN_ASSETS } from "@/config-global";
import Flickity from "react-flickity-component";
import "./list-movie.scss";
import "flickity/css/flickity.css";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import ItemMovie from "./item-movie";

interface ListMovieProps {
  title: string;
  isLoading: boolean;
  data: Array<MovieDetail>;
}

const carouselOption = {
  prevNextButtons: false,
  pageDots: false,
  selectedAttraction: 0.01,
  friction: 0.18,
  // wrapAround: true,
  groupCells: 6,
  cellAlign: "left",
  percentPosition: false,
  lazyLoad: true,
};

export default function ListMovie({ title, isLoading, data }: ListMovieProps) {
  const [flickity, setFlickity] = useState<any>(null);

  if (flickity !== null) {
    console.log(flickity);
    // flickity?.change((index: number) => console.log(index));
  }

  return (
    <Flex direction="column" className="list-movie" id={title}>
      <Flex direction="row" align="center" justify="between">
        <Text className="top-text">{title}</Text>

        <Flex direction="row" gap="4" style={{ position: "relative" }}>
          <IconButton
            variant="ghost"
            className="custom-button-flickity flickity-button prev"
            onClick={() => flickity?.previous()}
            disabled={flickity?.selectedIndex < 1}
          >
            <IconChevronLeft color="white" size={20} />
          </IconButton>
          <IconButton
            variant="ghost"
            className="custom-button-flickity flickity-button next"
            onClick={() => flickity?.next()}
          >
            <IconChevronRight color="white" size={20} />
          </IconButton>
        </Flex>
      </Flex>

      <Flickity
        className="section-list"
        options={carouselOption}
        flickityRef={(ref) => setFlickity(ref)}
        disableImagesLoaded
      >
        {isLoading ? (
          [...Array(10)]?.map((item, key) => (
            <Flex key={key} direction="column" className="item-list loading">
              <Box className="movie-image" />

              <Flex direction="column" className="movie-detail">
                <Box className="title ori loading" />
                <Box className="title loading" />
              </Flex>
            </Flex>
          ))
        ) : data?.length >= 1 ? (
          data
            ?.filter((item, key) => key < 10)
            ?.map((item, key) => <ItemMovie key={key} item={item} />)
        ) : (
          <Text>Tidak ada data</Text>
        )}
      </Flickity>
    </Flex>
  );
}

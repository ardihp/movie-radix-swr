import React, { useState } from "react";
import { Box, Flex, IconButton, Text } from "@radix-ui/themes";
import { MovieDetail } from "@/types/movie";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import ItemMovie from "./item-movie";
import Slider from "react-slick";
import "./list-movie.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ListMovieProps {
  title: string;
  isLoading: boolean;
  data: Array<MovieDetail>;
}

const settings = {
  dots: false,
  infinite: true,
  lazyLoad: true,
  slidesToShow: 7,
  arrows: false,
  centerMode: true,
  swipeToSlide: true,
  centerPadding: "50px",
  responsive: [
    {
      breakpoint: 1660,
      settings: {
        slidesToShow: 6,
      },
    },
    {
      breakpoint: 1560,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 1360,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        centerPadding: "70px",
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        centerPadding: "80px",
      },
    },
    {
      breakpoint: 840,
      settings: {
        slidesToShow: 3,
        centerPadding: "25px",
      },
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 2,
        centerPadding: "85px",
      },
    },
  ],
};

export default function ListMovie({ title, isLoading, data }: ListMovieProps) {
  const [sliderRef, setSliderRef] = useState<any>(null);

  return (
    <Flex direction="column" className="list-movie" id={title}>
      <Flex direction="row" align="center" justify="between">
        <Text className="top-text">{title}</Text>
      </Flex>

      <Flex direction="column" className="section-list">
        <div style={{ maxWidth: "100%", height: "100%" }}>
          <Slider ref={(slider: any) => setSliderRef(slider)} {...settings}>
            {isLoading ? (
              [...Array(10)]?.map((item, key) => (
                <Flex
                  key={key}
                  direction="column"
                  className="item-list loading"
                >
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
          </Slider>
        </div>

        <IconButton
          variant="ghost"
          className="custom-button-flickity flickity-button prev"
          onClick={() => sliderRef?.slickPrev()}
        >
          <IconChevronLeft color="white" size={28} />
        </IconButton>
        <IconButton
          variant="ghost"
          className="custom-button-flickity flickity-button next"
          onClick={() => sliderRef?.slickNext()}
        >
          <IconChevronRight color="white" size={28} />
        </IconButton>
      </Flex>
    </Flex>
  );
}

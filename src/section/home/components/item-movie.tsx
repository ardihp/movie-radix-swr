import { HOST_DOMAIN_ASSETS } from "@/config-global";
import { MovieDetail } from "@/types/movie";
import { Flex, Text } from "@radix-ui/themes";
import Image from "next/image";
import React from "react";

interface ItemMovieProps {
  item: MovieDetail;
}

export default function ItemMovie({ item }: ItemMovieProps) {
  return (
    <Flex direction="column" className="item-list">
      <Image
        src={HOST_DOMAIN_ASSETS + item.poster_path}
        className="movie-image"
        fill
        sizes="100%"
        alt={item.title}
        loading="lazy"
      />

      <Flex direction="column" className="movie-detail">
        <Text className="title ori">{item?.original_title}</Text>
        <Text className="title">{item.title}</Text>
      </Flex>
    </Flex>
  );
}

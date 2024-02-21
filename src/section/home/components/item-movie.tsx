import { HOST_DOMAIN_ASSETS } from "@/config-global";
import { MovieDetail } from "@/types/movie";
import { Box, Flex, Text } from "@radix-ui/themes";
import * as HoverCard from "@radix-ui/react-hover-card";
import Image from "next/image";
import React from "react";
import "./item-movie.scss";
import dayjs from "dayjs";
import { IconStarFilled } from "@tabler/icons-react";
import Link from "next/link";

interface ItemMovieProps {
  item: MovieDetail;
  viewStyle?: object;
}

export default function ItemMovie({ item, viewStyle }: ItemMovieProps) {
  const idr = Intl.NumberFormat(["id"]);

  return (
    <HoverCard.Root openDelay={150} closeDelay={0}>
      <HoverCard.Trigger asChild>
        <Link href={`/movie/detail/${item.id}`}>
          <Flex direction="column" className="item-list" style={viewStyle}>
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
        </Link>
      </HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content
          data-site="top"
          side="right"
          align="start"
          className="HoverCardContent"
          sideOffset={12}
        >
          <Flex direction="column" className="detail-content">
            <Text className="text">{item?.overview}</Text>

            <Flex direction="row" className="vote">
              <IconStarFilled width="18px" height="18px" />
              <Text className="text">
                {Number(item?.vote_average).toFixed(1)} (
                {idr.format(item?.vote_count || 0)})
              </Text>
            </Flex>
          </Flex>
          <HoverCard.Arrow className="HoverCardArrow" />
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
}

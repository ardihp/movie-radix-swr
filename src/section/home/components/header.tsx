import { Button, Flex, Heading, Text } from "@radix-ui/themes";
import React from "react";
import "./header.scss";
import { MovieDetail } from "@/types/movie";
import { HOST_DOMAIN_ASSETS } from "@/config-global";
import {
  IconInfoCircleFilled,
  IconPlayerPlayFilled,
  IconStarFilled,
  IconUniverse,
} from "@tabler/icons-react";
import Image from "next/image";

interface HeaderHomeProps {
  randomMovie: MovieDetail;
}

export default function HeaderHome({ randomMovie }: HeaderHomeProps) {
  return (
    <Flex direction="column" className="header-home">
      <Image
        src={HOST_DOMAIN_ASSETS + randomMovie.backdrop_path}
        className="header-image"
        priority
        fill
        alt={randomMovie.title}
      />
      <Flex direction="column" className="section-movie" height="100%">
        <Flex direction="row" align="center" gap="2" className="badge">
          <IconUniverse width="16px" height="16px" />
          <Text>Now Playing</Text>
        </Flex>

        <Flex direction="column" gap="4" className="movie-detail">
          <Text className="movie-title">{randomMovie.title}</Text>
          <Text className="movie-description">{randomMovie.overview}</Text>

          <Flex direction="row" align="center" className="movie-rate">
            <IconStarFilled width="18px" height="18px" />
            <Text>{Number(randomMovie.vote_average).toFixed(1)}</Text>
          </Flex>
        </Flex>

        <Flex direction="row" gap="2">
          <Button
            className="btn-primary"
            style={{
              width: 125,
              height: 55,
              fontSize: 16,
              borderRadius: 16,
            }}
          >
            <Flex direction="row" align="center" gap="2">
              <IconPlayerPlayFilled height="16px" width="16px" />
              <Text>Watch</Text>
            </Flex>
          </Button>

          <Button
            className="btn-default"
            style={{
              width: 165,
              height: 55,
              fontSize: 16,
              borderRadius: 16,
            }}
          >
            <Flex direction="row" align="center" gap="2">
              <IconInfoCircleFilled height="16px" width="16px" />
              <Text>More Detail</Text>
            </Flex>
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

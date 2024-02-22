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
import Link from "next/link";

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

        <Flex direction="row" gap="4">
          <Button className="btn-primary btn-header">
            <Flex direction="row" align="center" gap="2">
              <Flex
                align="center"
                justify="center"
                style={{
                  border: "1px solid white",
                  borderRadius: "100%",
                  padding: 3,
                }}
              >
                <IconPlayerPlayFilled height="10px" width="10px" />
              </Flex>
              <Text>Watch Trailer</Text>
            </Flex>
          </Button>

          <Link href={`/movie/detail/${randomMovie.id}`}>
            <Button className="btn-default btn-header">
              <Flex direction="row" align="center" gap="2">
                <IconInfoCircleFilled height="16px" width="16px" />
                <Text>More Detail</Text>
              </Flex>
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}

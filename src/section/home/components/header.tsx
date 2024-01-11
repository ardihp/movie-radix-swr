import { Button, Flex, Heading, Text } from "@radix-ui/themes";
import React from "react";
import "./header.scss";
import { MovieDetail } from "@/types/movie";
import { HOST_DOMAIN_ASSETS } from "@/config-global";
import { IconStar, IconStarFilled, IconUniverse } from "@tabler/icons-react";

interface HeaderHomeProps {
  randomMovie: MovieDetail;
}

export default function HeaderHome({ randomMovie }: HeaderHomeProps) {
  return (
    <Flex direction="column" className="header-home">
      <img
        src={HOST_DOMAIN_ASSETS + randomMovie.backdrop_path}
        style={{
          height: "100%",
          width: "100%",
          objectPosition: "center",
          objectFit: "cover",
          zIndex: 0,
        }}
      />
      <Flex direction="column" className="movie-detail" height="100%">
        <Flex direction="row" align="center" gap="2" className="badge">
          <IconUniverse width="16px" height="16px" />
          <Text>Now Playing</Text>
        </Flex>

        <Flex direction="column" gap="3">
          <Text className="movie-title">{randomMovie.title}</Text>
          <Text className="movie-description">{randomMovie.overview}</Text>

          <Flex direction="row" align="center" className="movie-rate">
            <IconStarFilled width="18px" height="18px" />
            <Text>{Number(randomMovie.vote_average).toFixed(1)}</Text>
          </Flex>
        </Flex>

        <Button
          className="btn-primary"
          style={{
            width: 130,
            height: 60,
            fontSize: 16,
            borderRadius: 16,
          }}
        >
          Watch
        </Button>
      </Flex>
    </Flex>
  );
}

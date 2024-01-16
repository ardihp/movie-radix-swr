import React from "react";
import { Flex, Text } from "@radix-ui/themes";
import "./list-movie.scss";

interface ListMovieProps {
  title: string;
}

export default function ListMovie({ title }: ListMovieProps) {
  return (
    <Flex direction="column" className="list-movie">
      <Text className="top-text">{title}</Text>
    </Flex>
  );
}

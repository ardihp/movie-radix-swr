import React from "react";
import { Flex } from "@radix-ui/themes";
import "./loader.scss";

export default function Loader() {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      gap="3"
      height="100%"
    >
      <span className="loader"></span>
    </Flex>
  );
}

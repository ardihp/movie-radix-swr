import React from "react";
import { Flex, Text } from "@radix-ui/themes";
import "./header.scss";

export default function Header() {
  return (
    <Flex direction="column" gap="3" className="header">
      <Flex direction="row" align="center" className="wrapper-header">
        <Text>Header</Text>
      </Flex>
    </Flex>
  );
}

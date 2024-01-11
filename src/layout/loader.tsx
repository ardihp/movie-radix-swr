import React from "react";
import { Flex, Text } from "@radix-ui/themes";

export default function Loader() {
  return (
    <Flex direction="column" align="center" justify="center" gap="3" height='100%'>
      <Text>Loading data...</Text>
    </Flex>
  );
}

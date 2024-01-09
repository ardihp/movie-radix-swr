import React from "react";
import { Flex, Text } from "@radix-ui/themes";
import "./content.css";

export default function Content({ children }: React.PropsWithChildren) {
  return (
    <Flex direction="column" gap="3" p="4" className="content">
      {children}
    </Flex>
  );
}

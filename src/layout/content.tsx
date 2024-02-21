"use client";

import React from "react";
import { Flex } from "@radix-ui/themes";
import { SWRConfig } from "swr";
import "./content.scss";

export default function Content({ children }: React.PropsWithChildren) {
  return (
    <SWRConfig value={{ provider: () => new Map() }}>
      <Flex direction="column" className="content">
        {children}
      </Flex>
    </SWRConfig>
  );
}

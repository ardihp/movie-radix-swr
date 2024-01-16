'use client'

import { Flex, Text } from "@radix-ui/themes";
import React from "react";
import "./content-list.scss";
import dynamic from "next/dynamic";
const ListMovie = dynamic(() => import("./list-movie"), {
  loading: () => <p>"loading..."</p>,
});

export default function ContentList() {
  return (
    <Flex direction="column" className="content-list">
      <ListMovie title="Now Playing" />
      <ListMovie title="Popular" />
      <ListMovie title="Top Rated" />
      <ListMovie title="Upcoming" />
    </Flex>
  );
}

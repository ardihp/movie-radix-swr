"use client";

import React from "react";
import { Flex, Heading, Separator, Text } from "@radix-ui/themes";
import MenuSidebar from "./components/menu-sidebar";
import {
  CubeIcon,
  DesktopIcon,
  GlobeIcon,
  PersonIcon,
  RocketIcon,
} from "@radix-ui/react-icons";
import "./sidebar.scss";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <Flex direction="column" gap="3" p="4" className="sidebar">
      <Heading m="3" className="logo">
        <span>Thelazy.</span>DB
      </Heading>

      <Flex direction="column" gap="3">
        <Text weight="bold" className="menu-header" mb="1">
          News Feed
        </Text>

        <MenuSidebar
          icon={<GlobeIcon width="20px" height="20px" />}
          active={pathname === "/"}
          href="/"
          text="Browse"
        />
        <MenuSidebar
          icon={<RocketIcon width="20px" height="20px" />}
          active={pathname.includes("movies")}
          href="/movies"
          text="Movies"
        />
        <MenuSidebar
          icon={<DesktopIcon width="20px" height="20px" />}
          active={pathname.includes("tv-show")}
          href="/tv-show"
          text="TV Show"
        />
        <MenuSidebar
          icon={<PersonIcon width="20px" height="20px" />}
          active={pathname.includes("people")}
          href="/people"
          text="People"
        />
        <MenuSidebar
          icon={<CubeIcon width="20px" height="20px" />}
          active={pathname.includes("genre")}
          href="/genre"
          text="Genre"
        />
      </Flex>

      <Separator />
    </Flex>
  );
}

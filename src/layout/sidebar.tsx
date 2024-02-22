"use client";

import React from "react";
import { Box, Flex, Heading, Text } from "@radix-ui/themes";
import MenuSidebar from "./components/menu-sidebar";
import { DesktopIcon, GlobeIcon, PieChartIcon } from "@radix-ui/react-icons";
import "./sidebar.scss";
import { usePathname } from "next/navigation";
import { IconDeviceTvOld } from "@tabler/icons-react";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <Flex direction="row" align="center" gap="1" className="logo">
        <Box mt="1" className="icon-logo">
          <PieChartIcon width="40px" height="40px" />
        </Box>

        <Heading m="3">
          <span>Thelazy</span>MDB
        </Heading>
      </Flex>

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
          icon={<IconDeviceTvOld size={20} />}
          active={pathname.includes("movie-list")}
          href="/movie-list"
          text="Movies"
        />
        <MenuSidebar
          icon={<DesktopIcon width="20px" height="20px" />}
          active={pathname.includes("tv-show")}
          href="/tv-show"
          text="TV Show"
        />
      </Flex>
    </aside>
  );
}

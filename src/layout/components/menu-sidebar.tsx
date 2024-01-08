import { Flex, Text } from "@radix-ui/themes";
import React from "react";
import "./menu-sidebar.scss";
import Link from "next/link";

interface MenuSidebarProps {
  icon?: React.ReactNode;
  active?: boolean;
  href: string;
  text: string;
}

export default function MenuSidebar({
  icon,
  active,
  href,
  text,
}: MenuSidebarProps) {
  return (
    <Link href={href} className="menu-link">
      <Flex
        direction="row"
        align="center"
        gap="4"
        px="4"
        py="3"
        className={`menu-sidebar ${active ? "active" : ""}`}
      >
        {icon}
        <Text weight="bold" className="menu-text">
          {text}
        </Text>
      </Flex>
    </Link>
  );
}

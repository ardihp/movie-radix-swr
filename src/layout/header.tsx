"use client";

import React from "react";
import { Flex, IconButton, Text, TextField } from "@radix-ui/themes";
import { MagnifyingGlassIcon, PersonIcon } from "@radix-ui/react-icons";
import "./header.scss";

export default function Header() {
  return (
    <Flex direction="column" gap="3" className="header">
      <Flex
        direction="row"
        align="center"
        justify="between"
        className="wrapper-header"
      >
        <Flex direction="row" align="center" className="search-input">
          <MagnifyingGlassIcon height="24px" width="24px" />
          <TextField.Input placeholder="Search everything" />
        </Flex>

        <IconButton className="wrapper-user-login">
          <PersonIcon height="16px" width="16px" />
        </IconButton>
      </Flex>
    </Flex>
  );
}

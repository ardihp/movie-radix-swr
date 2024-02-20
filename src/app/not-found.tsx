import { Button, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

export default function Page404() {
  return (
    <Flex className="content-404">
      <Text className="text">
        Seem's like you are lost <br /> ┬┴┬┴┤(･_├┬┴┬┴
      </Text>
      <Link href="/">
        <Button className="btn-default">Take me back</Button>
      </Link>
    </Flex>
  );
}

import { HOST_DOMAIN_ASSETS } from "@/config-global";
import { MovieDetail } from "@/types/movie";
import { Box, Flex, Text } from "@radix-ui/themes";
import * as HoverCard from "@radix-ui/react-hover-card";
import Image from "next/image";
import React, { useRef } from "react";
import "./item-movie.scss";
import dayjs from "dayjs";
import { IconStarFilled } from "@tabler/icons-react";
import Link from "next/link";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";

interface ItemMovieProps {
  item: MovieDetail;
  itemKey: number;
  viewStyle?: object;
}

export default function ItemMovie({
  item,
  itemKey,
  viewStyle,
}: ItemMovieProps) {
  const idr = Intl.NumberFormat(["id"]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <HoverCard.Root openDelay={150} closeDelay={0}>
      <HoverCard.Trigger asChild>
        <Link href={`/movie/detail/${item.id}`}>
          <motion.div
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: isInView ? 0 : 25, opacity: isInView ? 1 : 0 }}
            transition={{ type: "spring", delay: 0.15 }}
          >
            <Flex
              ref={ref}
              direction="column"
              className="item-list"
              style={viewStyle}
            >
              <motion.div
                className="movie-image"
                initial={{ display: "block" }}
                animate={{ display: "none" }}
                transition={{ type: "spring", delay: 1.5 }}
              />
              <motion.div
                className="movie-image"
                initial={{ display: "none" }}
                animate={{ display: "block" }}
                transition={{ type: "spring", delay: 1.5 }}
              >
                {isInView && (
                  <Image
                    src={HOST_DOMAIN_ASSETS + item.poster_path}
                    className="movie-image"
                    fill
                    sizes="100%"
                    alt={item.title}
                    style={{ opacity: 0 }}
                    onLoad={(e) => {
                      e.currentTarget.style.opacity = "1";
                      e.currentTarget.style.transition = "all .5s ease-in";
                    }}
                    loading="lazy"
                  />
                )}
              </motion.div>

              <Flex direction="column" className="movie-detail">
                <Text className="title ori">{item?.original_title}</Text>
                <Text className="title">{item.title}</Text>
              </Flex>
            </Flex>
          </motion.div>
        </Link>
      </HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content
          data-site="top"
          side="right"
          align="start"
          className="HoverCardContent"
          sideOffset={12}
        >
          <Flex direction="column" className="detail-content">
            <Text className="text overview">{item?.overview}</Text>

            <Flex direction="row" className="vote">
              <IconStarFilled width="18px" height="18px" />
              <Text className="text">
                {Number(item?.vote_average).toFixed(1)} (
                {idr.format(item?.vote_count || 0)})
              </Text>
            </Flex>
          </Flex>
          <HoverCard.Arrow className="HoverCardArrow" />
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
}

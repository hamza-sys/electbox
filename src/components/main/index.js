import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Image,
  List,
  Slide,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";

import { useMediaQuery } from "@chakra-ui/react";

import CategoryList from "./category_list";
import PagesLinks from "./PagesLinks";

import sale1 from "../../images/sale-1.webp";
import sale2 from "../../images/sale-2.webp";

import CategoryItem from "./category_list/CategoryItem";
import Sale from "./Sale";
import PopularItems from "./popular_items";
import Carousel from "react-multi-carousel";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

import SliderCarousel from "./slider";

const Main = () => {
  const [isMax680, isMax740, isMax1320] = useMediaQuery([
    "(max-width: 680px)",
    "(max-width: 740px)",
    "(max-width: 1320px)",
  ]);

  return (
    <Box w="100%" bg="#f5f5f5">
      <Flex direction={isMax1320 ? "column-reverse" : "row"}>
        {!isMax1320 ? (
          <Box w="25%">
            {/* dropdown */}
            <Flex direction="column" gap="20px" align="center">
              <CategoryList />
              <Box w="80%" bg="white">
                <List>
                  <CategoryItem category_text="Smart Items" />
                  <CategoryItem category_text="Smart Watches" />
                  <CategoryItem category_text="Microphones" />
                </List>
              </Box>
            </Flex>
          </Box>
        ) : (
          ""
        )}

        <Box w={isMax1320 ? "100%" : "80%"}>
          <Flex direction="column" gap="10px" align={isMax1320 ? "center" : ""}>
            <PagesLinks isMax740={isMax740} isMax1280={isMax1320} />
            <Box w="100%">
              {isMax1320 ? (
                <CategoryList isMax740={isMax740} isMax1320={isMax1320} />
              ) : (
                ""
              )}
            </Box>

            {/* Carousel Section */}
            <Box
              px="10px"
              w={isMax740 ? "97%" : isMax1320 ? "90%" : "95%"}
              position="relative"
            >
              <SliderCarousel />
            </Box>

            {/* sales section */}
            <Box px="10px" w={isMax740 ? "97%" : isMax1320 ? "90%" : "95%"}>
              <Flex
                justify="space-between"
                gap="20px"
                direction={isMax680 ? "column" : "row"}
              >
                <Sale
                  offTextPercentage="30%"
                  productName="Prolet Desgined for Airpods"
                  imgSrc={sale1}
                  w={isMax680 ? "100%" : "50%"}
                />
                <Sale
                  offTextPercentage="30%"
                  productName="EasySkinz XBOX Series X"
                  imgSrc={sale2}
                  w={isMax680 ? "100%" : "50%"}
                  color="white"
                />
              </Flex>
            </Box>

            {/* Popular Products */}
            <Box px="10px" w={isMax740 ? "97%" : isMax1320 ? "90%" : "95%"}>
              <PopularItems />
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Main;

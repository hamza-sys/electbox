import React, { useRef, useState } from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Box, Button, Flex, IconButton, Text } from "@chakra-ui/react";
import {ChevronLeftIcon, ChevronRightIcon} from '@chakra-ui/icons'

import pp1 from "../../../images/pp1.webp";
import pp2 from "../../../images/pp2.webp";
import pp3 from "../../../images/pp3.webp";
import pp4 from "../../../images/pp4.webp";
import pp5 from "../../../images/pp5.webp";
import pp6 from "../../../images/pp6.webp";
import pp7 from "../../../images/pp7.webp";
import pp8 from "../../../images/pp8.webp";
import pp9 from "../../../images/pp9.webp";
import pp10 from "../../../images/pp10.webp";
import PopularItem from "./PopularItem";

const popular_products = [
  {
    offPercentage: 23,
    img: pp1,
    name: "Beats Solo3 Wireless Headphones Beats",
    price: 17,
    prevPrice: 19,
  },
  {
    offPercentage: 16,
    img: pp2,
    name: "New Amazon Echo Product Dot 4th (Gen)",
    price: 100,
    prevPrice: 120,
  },
  {
    offPercentage: 25,
    img: pp3,
    name: "New Apple Iphone 12 pro Max gold",
    price: 9,
    prevPrice: 12,
  },
  {
    img: pp4,
    name: "French connection new smartWatch",
    price: 240,
  },
  {
    offPercentage: 7,
    img: pp5,
    name: "Apple Macbook pro M1 chip 8-core CPU",
    price: 90,
    prevPrice: 97,
  },
  {
    offPercentage: 12,
    img: pp6,
    name: "Latest sony portable wireless speaker",
    price: 85,
    prevPrice: 97,
  },
  {
    offPercentage: 23,
    img: pp7,
    name: "JBL clip portable bluetooth speaker",
    price: 300,
    prevPrice: 390,
  },
  {
    offPercentage: 47,
    img: pp8,
    name: "Full HD smart LED TV with Android 11",
    price: 120,
    prevPrice: 230,
  },
  {
    offPercentage: 23,
    img: pp9,
    name: "Beats Solo3 Wireless Headphones Beats",
    price: 370,
    prevPrice: 40,
  },
  {
    img: pp10,
    name: "HP 15 AMD Ryzen thin and dark laptop",
    price: 250,
  },
];

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1030 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1020, min: 820 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 820, min: 530 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 610, min: 0 },
    items: 2,
  },
};

const PopularItems = () => {
  const [isLastSlide, setLastIsSlide] = useState(false);
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const carouselRef = useRef();

  const handleSlideChange = () => {
    if (carouselRef.current) {
      const { currentSlide, slidesToShow, totalItems } =
        carouselRef.current.state;

      setIsFirstSlide(currentSlide === 0)
      const lastVisibleItemIndex = currentSlide + slidesToShow;
      

      setLastIsSlide(lastVisibleItemIndex >= totalItems);
    }
  };

  return (
    <Box mt={{base: 3, md: 5}}>
      <Flex mb={{base: 1, md: 3}} justify='space-between'>
        <Text fontSize={{base: 'xl', md: '2xl'}} fontWeight='600'>Popular Products</Text>
        <Box>
          <IconButton onClick={() => carouselRef.current.previous()} isDisabled={isFirstSlide} transition='all .3s ease' background='none' _hover={{color: '#fdda06'}} icon={<ChevronLeftIcon boxSize={7} />} />
          <IconButton onClick={() => carouselRef.current.next()} isDisabled={isLastSlide} transition='all .3s ease' background='none' _hover={{color: '#fdda06'}} icon={<ChevronRightIcon boxSize={7} />} />
        </Box>
      </Flex>
      <Carousel
        ref={carouselRef}
        responsive={responsive}
        arrows={false}
        afterChange={handleSlideChange}
      >
        {popular_products.map((item, index) => (
          <PopularItem {...popular_products[index]} />
        ))}
      </Carousel>
    </Box>
  );
};

export default PopularItems;

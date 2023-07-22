import { Box, Image, Link, Text, Flex, useMediaQuery } from "@chakra-ui/react";
import React, { useState } from "react";

const Sale = ({ offTextPercentage, productName, imgSrc, ...styleProps }) => {
  const [isBoxHover, setIsBoxHover] = useState(false);

  const [isMax1020] = useMediaQuery(["(max-width: 1020px)"]);

  const mouseEnter = () => {
    setIsBoxHover(true);
  };

  const mouseLeave = () => {
    setIsBoxHover(false);
  };

  return (
    <Box
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      position="relative"
      borderRadius="5px"
      overflow="hidden"
      _hover={{ cursor: "pointer" }}
      {...styleProps}
    >
      <Image
        w="100%"
        h="100%"
        src={imgSrc}
        transition="all .3s ease"
        _hover={{ transform: `${isBoxHover ? "scale(1.1)" : ""}` }}
      />
      <Box
        sx={{
          height: "50%",
          width: "40%",
          position: "absolute",
          top: "30%",
          right: "20px",
        }}
      >
        <Flex h="100%" direction="column" justify="center">
          <Text>{offTextPercentage}</Text>
          <Text
            lineHeight="1.2"
            my={1}
            fontSize={isMax1020 ? "xl" : "2xl"}
            fontWeight="bold"
          >
            {productName}
          </Text>
          <Link textDecoration="underline" fontWeight="500" fontSize="sm">
            SHOP NOW
          </Link>
        </Flex>
      </Box>
    </Box>
  );
};

export default Sale;

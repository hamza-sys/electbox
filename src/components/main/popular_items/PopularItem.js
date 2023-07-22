import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  textDecoration,
} from "@chakra-ui/react";
import React from "react";

import { BsStar } from "react-icons/bs";

const PopularItem = ({ offPercentage, img, name, price, prevPrice }) => {
  return (
    <Box
      mr="10px"
      borderRadius="4px"
      bg="white"
      px="10px"
          mb="10px"
      _hover={{ cursor: "pointer" }}
    >
      <Box position="relative">
        <Image src={img} w="100%" />
        {offPercentage && (
          <Text position="absolute" top="10px" fontWeight="600" color="red.400">
            -23%
          </Text>
        )}
      </Box>

      {/* stars */}
      <Box>
        <Flex direction="column" gap="10px">
          <Flex gap="5px" mt="10px">
            {[...Array(5)].map((a) => (
              <BsStar />
            ))}
          </Flex>
                  <Text textOverflow='ellipsis' fontSize="sm">{name}</Text>
          <Text>
                      <span style={{ fontWeight: "bold" }}>{`$${price}.00`}</span>{" "}
            {prevPrice && (
              <span
                style={{
                  fontWeight: "thin",
                  textDecoration: "line-through",
                  color: "gray",
                }}
              >
                $19.00
              </span>
            )}
          </Text>
        </Flex>
      </Box>

      <Button my="10px" w="100%" fontSize="sm">
        ADD TO CART
      </Button>
    </Box>
  );
};

export default PopularItem;

import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  textDecoration,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";

import { BsStar } from "react-icons/bs";

const PopularItem = ({ offPercentage, img, name, price, prevPrice }) => {

    const [isMax430] = useMediaQuery(['(max-width: 430px)'])

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
          <Text textOverflow='ellipsis' fontSize="sm">{isMax430 ? limitString(name, 27) + '...' : limitString(name, 22)}</Text>
          <Text>
                      <span style={{ fontWeight: "bold" }}>{`$${price}.00`}</span>{" "}
            {prevPrice && (
              <span
                style={{
                  fontWeight: "thin",
                  fontSize: '13px',
                  textDecoration: "line-through",
                  color: "gray",
                }}
              >
                {`$${prevPrice}.00`}
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

function limitString(str, maxlength) {
    return str.substring(0, maxlength)
}

export default PopularItem;

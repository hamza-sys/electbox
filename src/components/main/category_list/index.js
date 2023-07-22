import React, { useState } from "react";
import CategoryItem from "./CategoryItem";
import { Box, Flex, List, Text, Collapse } from "@chakra-ui/react";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";

const CategoryList = ({ isMax740, isMax1320 }) => {
  // const [isOpen, onToggle] = useDisclosure()
  const [show, setshow] = useState(false);

  const handleShow = () => setshow(!show);

  return (
    <Box w="100%">
      {/* dropdown header */}
      <Box bg={!isMax1320 ? "#233040" : ""}>
        <Flex
          w={isMax740 ? "93%" : isMax1320 ? "90%" : "82%"}
          mx="auto"
          onClick={handleShow}
          justify="space-between"
          _hover={{ cursor: "pointer" }}
          bg="#fdda06"
          p={4}
          borderRadius={`${isMax1320 ? "5px 5px 5px 5px" : "5px 5px 0 0"}`}
        >
          <Flex align="center">
            <HamburgerIcon />
            <Text fontSize="12px" fontWeight="600" ml={2}>
              SHOP BY CATEGORIES
            </Text>
          </Flex>
          {show ? (
            <ChevronDownIcon boxSize={6} />
          ) : (
            <ChevronUpIcon boxSize={6} />
          )}
        </Flex>
      </Box>

      {/* dropdown items */}
      <Collapse in={show} animateOpacity p={8}>
        <List
          bg="white"
          w={isMax740 ? "92%" : isMax1320 ? "90%" : "82%"}
          mx="auto"
          borderRadius="0 0 5px 5px"
        >
          <CategoryItem category_text="Smart Items" />
          <CategoryItem category_text="Smart Watches" />
          <CategoryItem category_text="Microphones" />
          <CategoryItem category_text="Ipad Accessories" />
          <CategoryItem category_text="Wireless Printer" />
          <CategoryItem category_text="Video Game" />
          <CategoryItem category_text="Polaroid Camera" />
          <CategoryItem category_text="Air Purifier" />
          <CategoryItem category_text="Control Speaker" />
          <CategoryItem category_text="HeadSet" />
        </List>
      </Collapse>
    </Box>
  );
};

export default CategoryList;

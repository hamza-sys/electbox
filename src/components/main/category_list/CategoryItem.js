import { Divider, ListItem, Stack, Text } from "@chakra-ui/react";
import React from "react";

const CategoryItem = ({ category_text }) => {
  return (
    <ListItem _hover={{ color: "#E1BB0C", cursor: "pointer" }}>
      <Stack px={6} py={2}>
        <Text fontSize="sm">{category_text}</Text>
        <Divider />
      </Stack>
    </ListItem>
  );
};

export default CategoryItem;

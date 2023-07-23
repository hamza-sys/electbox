import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  IconButton,
  Input,
  Link,
  MenuIcon,
  Stack,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

import { HamburgerIcon } from "@chakra-ui/icons";

function DrawerCom() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <IconButton
        icon={<HamburgerIcon boxSize={6} />}
        fontWeight="600"
        colorScheme="none"
        onClick={onOpen}
      />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody mt="60px">
            <Stack spacing={6} fontWeight="600" fontSize="15px">
              <Link _hover={{ textDecoration: "none", color: "#E1BB0C" }}>
                HOME
              </Link>
              <Link _hover={{ textDecoration: "none", color: "#E1BB0C" }}>
                CATALOG
              </Link>
              <Link _hover={{ textDecoration: "none", color: "#E1BB0C" }}>
                CONTACT
              </Link>
              <Link _hover={{ textDecoration: "none", color: "#E1BB0C" }}>
                OFFERS
              </Link>
              <Link _hover={{ textDecoration: "none", color: "#E1BB0C" }}>
                BLOG
              </Link>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default DrawerCom;

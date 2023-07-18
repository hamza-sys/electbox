import { Box, Button, Flex, HStack, Image, Input, VStack, Text, Badge } from '@chakra-ui/react'
import React from 'react'

import Logo from '../../images/logo.png'

import IconCom from './iconCom';

import { FaRegUser, FaRegHeart, FaArrowRotateLeft } from 'react-icons/fa'

import {BsCart3, BsArrowRepeat} from 'react-icons/bs'

const Navbar = () => {
  return (
        <Box bg="#233040" p={5} px={8}>
          {/* logo  */}
          <Flex justify='space-between'>
              <Image
                  src={Logo}
                  objectFit='contain'
              />
          
          {/* search */}

              <HStack w='37%'>
                  <Input colorScheme='whiteAlpha' bg='white' placeholder='Search Product' focusBorderColor='none' />
                  <Button bg='#fdda06' _hover={{bg: '#edcd07'}} px={7}>Search</Button>
              </HStack>


              {/* icons */}
              <HStack spacing={6}>
                  <IconCom icon={<FaRegUser />} text='Account' />
                  <IconCom icon={<FaRegHeart />} text='Wishlist' badge={3} />
                  <IconCom icon={<BsArrowRepeat />} text='Compare' badge={4} />
                  <IconCom icon={<BsCart3 />} text='My Cart' badge={5} />
              </HStack>
          </Flex>
        </Box>
  )
}

export default Navbar
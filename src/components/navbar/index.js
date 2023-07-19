import { Box, Button, Flex, HStack, Image, Input, useMediaQuery } from '@chakra-ui/react'
import React, { useState } from 'react'

import Logo from '../../images/logo.png'

import IconCom from './iconCom';

import { FaRegUser, FaRegHeart, FaSearch } from 'react-icons/fa'

import {BsCart3, BsArrowRepeat} from 'react-icons/bs'

import {HiSearch} from 'react-icons/hi'
import SearchBox from './searchBox';

const Navbar = () => {

    const [toggleSearch, setToggleSearch] = useState('navbar')

    const handleToggleSearch = () => {
        setToggleSearch((value) => {
            if (value === 'navbar') {
                setToggleSearch('search')
            } else {
                setToggleSearch('navbar')
            }
        })
    }


    const [isMax430, isMax500, isMax740, isMin980] = useMediaQuery(['(max-width: 430px)', '(max-width: 500px)', '(max-width: 740px)','(min-width: 980px)'])

    return (
        <Box>
            {toggleSearch === 'navbar' ? (
        <Box bg="#233040" p={4} px={isMax740 ? 3 : 8} w='100%' h='auto'>
                <Flex justify='space-between'>
                {/* logo  */}  
              <Image
                  src={Logo}
                  objectFit='contain'
                  w={isMax500 ? '150px' : isMax740 ? '180px' : 'auto'}
                  minw='50px'
              />
          
          {/* search */}

            { isMin980 ?  <HStack w='37%'>
                <Input colorScheme='whiteAlpha' bg='white' placeholder='Search Product' focusBorderColor='none' />
                <Button bg='#fdda06' _hover={{bg: '#edcd07'}} px={7}>Search</Button>
            </HStack> : ''}


              {/* icons */}
              <HStack spacing={isMax740 ? 1 : 6}>
                  {!isMin980 ? <IconCom icon={<HiSearch />}  text={isMax740 ? null : 'Search'} onClick={handleToggleSearch} /> : ''}
                  <IconCom icon={<FaRegUser />} text={isMax740 ? null : 'Account'} />
                  {!isMax430 ? (
                      <>
                        <IconCom icon={<FaRegHeart />} text={isMax740 ? null : 'Wishlist'} badge={3} />
                        <IconCom icon={<BsArrowRepeat />} text={isMax740 ? null : 'Compare'} badge={4} />
                      </>
                  ) : ''}
                  <IconCom icon={<BsCart3 />} text={isMax740 ? null : 'My Cart'} badge={5} />
              </HStack>
                    </Flex> 
            </Box>
            ) : (
            <Flex>
                <SearchBox onClick={handleToggleSearch} />
            </Flex>
            )
            }
          
            </Box>
  )
}

export default Navbar
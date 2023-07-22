import { Box, Flex, HStack, Link, Text } from '@chakra-ui/react'
import React from 'react'
import DrawerCom from './DrawerComp'

const PagesLinks = ({isMax740, isMax1280}) => {
  return (
        <Box bg='#233040' color='white' p={isMax740 ? 2 : isMax1280 ? 8 : 4} w='100%'>
      <Flex justify='space-between' align='center'>
            { isMax740 ? <DrawerCom /> :  <HStack spacing={6} fontWeight='600'>
                <Link _hover={{ textDecoration: 'none', color: '#E1BB0C'}}>HOME</Link>
                <Link _hover={{ textDecoration: 'none', color: '#E1BB0C'}}>CATALOG</Link>
                <Link _hover={{ textDecoration: 'none', color: '#E1BB0C'}}>CONTACT</Link>
                <Link _hover={{ textDecoration: 'none', color: '#E1BB0C'}}>OFFERS</Link>
                <Link _hover={{ textDecoration: 'none', color: '#E1BB0C'}}>BLOG</Link>
              </HStack> }  
              <Text>(+92) 3129056120</Text>
            </Flex>
        </Box>
  )
}

export default PagesLinks
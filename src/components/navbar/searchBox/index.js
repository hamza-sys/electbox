import { CloseIcon } from '@chakra-ui/icons'
import { Input, Box, IconButton, Flex, useMediaQuery } from '@chakra-ui/react'
import React from 'react'

const SearchBox = ({ onClick }) => {
        const [isMax580] = useMediaQuery(['(max-width: 580px'])

    return (
        <Box bg='#2d435e' w='100%' h='auto' p={6} onClick={onClick}>
            <Flex justify='center'>
                <Input placeholder='search products' focusBorderColor='none' bg='white' w='80%' />
                <IconButton icon={<CloseIcon />} bg='none' _hover={{bg: 'none'}} mx={1} color='white' onClick={onClick}  />
            </Flex>
        </Box>
  )
}

export default SearchBox
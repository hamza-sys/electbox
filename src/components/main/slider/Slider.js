import { Box, Button, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import SliderText from './SliderText'

const Slider = ({imgSrc, offPercentage, name}) => {
  return (
     <Box pos="relative">
                  <Image w="100%" h="100%" src={imgSrc} borderRadius='4px' />
                   <SliderText offPercentage={offPercentage} name={name} />
                </Box>
  )
}

export default Slider
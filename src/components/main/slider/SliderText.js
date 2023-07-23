import { Box, Button, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const SliderText = ({offPercentage, name}) => {
  return (
     <Box
                    p={{base: 2, sm: 4}}
                    sx={{
                      color: "white",
                      position: "absolute",
                      top: ["50%", null, null, null, '47%'],
                      left: ["50%", '53%'],
                      transform: ['translateY(-50%)']
                    }}
                  >
                    <Text fontSize={{ base: "13px", sm: '15px', md: "17px", lg: "20px" }}>
              Limited Offer {offPercentage}% Off
                    </Text>
                    <Heading
                      my={{base: 1, sm: 2.5, md: 3}}
                      size={{ base: 'md' , sm: 'md', md: 'lg', lg: "2xl" }}
              fontWeight={{ base: '700', sm: '600' }}
              dangerouslySetInnerHTML={{__html: name}}
                      >
                    </Heading>
          <Button
              variant={{ base: 'link', sm: 'solid' }}
                      backgroundColor={{base: 'none', sm: '#fdda06'}}
                      size={{base: 'xs', sm: 'md'}}
                      _hover={{ background: [null, "#fdda06"] }}
                      >
                      SHOP NOW
                    </Button>
                  </Box>
  )
}

export default SliderText
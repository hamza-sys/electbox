import { Box, Badge, VStack, Text } from '@chakra-ui/react'
import React from 'react'

const index = ({icon, text, badge, onClick}) => {
  return (
      <VStack position='relative'>
          <Box color='white' fontSize='1.6rem'>
                     {icon}
          </Box>
                     {badge ? <Badge bg='#fdda06' sx={{
                          position: 'absolute', top: '-5px', right: '9px', width: '18px', height:'18px',  borderRadius: '50%'
                      }}>1</Badge> : ''}
          <Text sx={{ color: 'white' }}>{text}</Text>  
                  </VStack>
  )
}

export default index
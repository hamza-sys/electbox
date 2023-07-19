import { Box, Badge, VStack, Text, } from '@chakra-ui/react'
import React from 'react'

const IconCom = ({ icon, text, badge, onClick, fontSize }) => {
  return (
      <VStack position='relative' minW='45px' onClick={onClick}>
          <Box color='white' fontSize='1.5rem'>
                     {icon}
          </Box>
                     {badge ? <Badge bg='#fdda06' sx={{
                          position: 'absolute', top: '-5px', right: '9px', width: '18px', height:'18px',  borderRadius: '50%'
      }}>1</Badge> : ''}
      {text ? <Text sx={{ color: 'white' }}>{text}</Text> : ''}
            
                  </VStack>
  )
}

export default IconCom
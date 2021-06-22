import React from 'react'

import { 
  Wrapper,
} from './styles'


const GuildIcon: React.FC = () => {
  const uri = 'https://images.alphacoders.com/239/239563.jpg'
  
  return(
    <Wrapper
      source={{ uri }}
      resizeMode='cover'
    />
  )
}

export default GuildIcon
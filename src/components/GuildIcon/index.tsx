import React from 'react';

import { 
  Wrapper,
} from './styles';


const GuildIcon: React.FC = () => {
  const uri = 'https://github.com/Dougllas92.png'
  
  return(
    <Wrapper
      source={{ uri }}
      resizeMode='cover'
    />
  )
}

export default GuildIcon;
import React from 'react'
import { TouchableOpacityProps} from 'react-native'

import { 
  Wrapper,
  Icon,
  Image,
  Title
 } from './styles'

import DiscordImg from '../../assets/discord.png'

interface Props extends TouchableOpacityProps {
  title: string
}

export function ButtonIcon({ title, ...props }: Props) {
  return(
    <Wrapper {...props}>
      <Icon>
        <Image source={DiscordImg} />
      </Icon>
      <Title>{title}</Title>
    </Wrapper>
  )
}
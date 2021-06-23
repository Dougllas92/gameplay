import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'

import { 
  Wrapper,
  Icon,
  Image,
  Title
 } from './styles'

import DiscordImg from '../../assets/discord.png'

interface Props extends RectButtonProps {
  title: string
  iconActive?: boolean
}

export function ButtonIcon({ title, iconActive=true, ...props }: Props) {
  return(
    <Wrapper {...props}>
      { iconActive && 
        <Icon>
          <Image source={DiscordImg} />
        </Icon>
      }
      <Title>{title}</Title>
    </Wrapper>
  )
}
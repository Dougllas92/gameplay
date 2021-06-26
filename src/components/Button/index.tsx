import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import { 
  Wrapper,
  Title
 } from './styles'

interface Props extends TouchableOpacityProps {
  title: string
}

const Button: React.FC<Props> = ({ title, ...props }) => {
  return(
    //@ts-ignore
    <Wrapper activeOpacity={0.7} {...props}>
      <Title>{title}</Title>
    </Wrapper>
  )
}

export default Button



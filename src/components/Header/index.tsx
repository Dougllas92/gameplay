import React, { ReactNode } from 'react'
import { BorderlessButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from 'styled-components/native'
import { Feather } from '@expo/vector-icons'

import { 
  Wrapper,
  Title,
  Content
 } from './styles'

type Props = {
  title: string
  action?: ReactNode
}

const Header: React.FC<Props> = ({ title, action}) => {
  const { colors } = useTheme()
  const navigation = useNavigation()

  return(
    <Wrapper
      colors={[colors.secondary100, colors.secondary40]}
    >
      <BorderlessButton onPress={() => navigation.goBack()}>
        <Feather name='arrow-left' size={24} color={colors.heading} />
      </BorderlessButton>

      <Title>{title}</Title>

      {action && <Content>{action}</Content>}

    </Wrapper>
  )
}

export default Header
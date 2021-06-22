import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { Wrapper, } from './styles'
import { useTheme } from 'styled-components/native'

const ButtonAdd = ({...props}: RectButtonProps): JSX.Element => {
  const { colors } = useTheme()

  return(
    <Wrapper {...props}>
      <MaterialCommunityIcons
        name='plus'
        color={colors.heading}
        size={24}
      />
    </Wrapper>
  )
}

export default ButtonAdd
import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useTheme } from 'styled-components/native'

import { Wrapper, } from './styles'

const ButtonAdd: React.FC<RectButtonProps> = ({...props}) => {
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
import React from 'react'
import { useTheme } from 'styled-components/native'

import { Wrapper, Load } from './styles'

const Loading: React.FC = () => {
  const { colors } = useTheme()

  return(
    <Wrapper>
      <Load size='large' color={colors.primary} />
    </Wrapper>
  )
}

export default Loading
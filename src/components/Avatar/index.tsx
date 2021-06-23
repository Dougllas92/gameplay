import React from 'react'
import { useTheme } from 'styled-components'

import { 
  Wrapper,
  AvatarImg 
} from './styles'

type Props = {
  urlImage: string
}

const Avatar = ({ urlImage }: Props): JSX.Element => {
  const { colors } = useTheme()

  return(
    <Wrapper
      colors={[colors.secondary80, colors.secondary100]}
    >
      <AvatarImg source={{ uri: urlImage}} />
    </Wrapper>
  )
}

export default Avatar
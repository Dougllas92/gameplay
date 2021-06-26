import React, { ReactNode } from 'react';
import { useTheme } from 'styled-components';

import { Wrapper } from './styles';

type Props = {
  children: ReactNode
}

const Background: React.FC<Props> = ({ children }) => {
  const { colors } = useTheme()
  return(
    <Wrapper
      colors={[colors.secondary80, colors.secondary100]}
    >
      {children}
    </Wrapper>
  )
}

export default Background;
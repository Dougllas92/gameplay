import React, { ReactNode} from 'react'
import { ModalProps } from 'react-native'
import Guilds from '../../pages/Guilds'
import Background from '../Background'

import { 
  Wrapper,
  Overlay,
  Content,
  Bar
} from './styles'

type Props = ModalProps & {
  children: ReactNode
}


const ModalView = ({ children, ...props}: Props) => {
  return(
    //@ts-ignore
    <Wrapper
      transparent
      animationType='slide'
      {...props}
    >
      <Overlay>
        <Content>
          <Background>
            <Bar />
            {children}
          </Background>
        </Content>
      </Overlay>

    </Wrapper>
  )
}

export default ModalView
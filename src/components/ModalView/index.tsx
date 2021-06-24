import React, { ReactNode} from 'react'
import { ModalProps } from 'react-native'
import Guilds from '../../pages/Guilds'

import { 
  Wrapper,
  Overlay,
  Content,
  Bar,
  Close
} from './styles'

import Background from '../Background'

type Props = ModalProps & {
  children: ReactNode
  closedModal: () => void
}


const ModalView = ({ children, closedModal, ...props}: Props) => {
  return(
    //@ts-ignore
    <Wrapper
      transparent
      animationType='slide'
      statusBarTranslucent
      {...props}
    >
      <Close onPress={closedModal}>
        <Overlay>
          <Content>
            <Background>
              <Bar />
              {children}
            </Background>
          </Content>
        </Overlay>
      </Close>

    </Wrapper>
  )
}

export default ModalView
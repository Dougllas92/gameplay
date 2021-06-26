import React, { ReactNode} from 'react'
import { ModalProps } from 'react-native'

import { 
  Wrapper,
  Overlay,
  Close
} from './styles'

import Background from '../Background'

type Props = ModalProps & {
  children: ReactNode
  closedModal?: () => void
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
      <Overlay>
        {children}
      </Overlay>
    </Wrapper>
  )
}

export default ModalView
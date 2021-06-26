import React, { ReactNode} from 'react'
import { ModalProps } from 'react-native'

import { 
  Wrapper,
  Overlay
} from './styles'

type Props = ModalProps & {
  children: ReactNode
}


const ModalView: React.FC<Props> = ({ children, ...props}) => {
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
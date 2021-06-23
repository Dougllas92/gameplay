import React from 'react'
import { TextInputProps } from 'react-native'

import { TextInput } from './styles'

const TextArea = ({...props}: TextInputProps): JSX.Element => {
  return(
    //@ts-ignore
    <TextInput {...props} />
  )
}

export default TextArea
import React from 'react'
import { TextInputProps } from 'react-native'

import { TextInput } from './styles'

const TextArea: React.FC<TextInputProps> = ({...props}) => {
  return(
    //@ts-ignore
    <TextInput {...props} />
  )
}

export default TextArea
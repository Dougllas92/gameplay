import React from 'react'
import { TextInputProps } from 'react-native'

import { TextInput } from './styles'

const SmallInput: React.FC<TextInputProps> = ({...props}) => {
  return(
    //@ts-ignore
    <TextInput 
      keyboardType='numeric'
      {...props}
    />
  )
}

export default SmallInput
import React from 'react'
import { TextInputProps } from 'react-native'

import { TextInput } from './styles'

const SmallInput = ({...props}: TextInputProps): JSX.Element => {
  return(
    //@ts-ignore
    <TextInput 
      keyboardType='numeric'
      {...props}
    />
  )
}

export default SmallInput
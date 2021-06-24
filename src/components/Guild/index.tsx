import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import { useTheme } from 'styled-components/native'
import { Feather } from '@expo/vector-icons'
import { View } from 'react-native'

import GuildIcon from '../GuildIcon'

import { 
  Wrapper,
  Content,
  Title,
  Type
} from './styles'

export type GuildProps = {
  id: string
  name: string
  icon: string | null
  owner: boolean
}

type Props = TouchableOpacityProps & {
  data: GuildProps
}


const Guild = ({ data, ...props}: Props): JSX.Element => {
  const { colors } = useTheme()

  return(
    //@ts-ignore
    <Wrapper
      activeOpacity={0.7}
      {...props}
    >

    <GuildIcon />

    <Content>
      <View>
        <Title>{data.name}</Title>
        <Type>{data.owner ? 'Administrador' : 'Convidado'}</Type>
      </View>
    </Content>

    <Feather name='chevron-right' size={24} color={colors.heading} />

    </Wrapper>
  )
}

export default Guild
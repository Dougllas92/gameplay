import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import { useTheme } from 'styled-components/native'
import { Feather } from '@expo/vector-icons'
import { View } from 'react-native'

import { 
  Wrapper,
  Content,
  Title,
  Type
} from './styles'

import { GuildProps } from '../../configs/interfaces'
import GuildIcon from '../GuildIcon'

type Props = TouchableOpacityProps & {
  data: GuildProps
}

const Guild: React.FC<Props> = ({ data, ...props}) => {
  const { colors } = useTheme()

  return(
    //@ts-ignore
    <Wrapper
      activeOpacity={0.7}
      {...props}
    >

    <GuildIcon guildId={data.id} iconId={data.icon}/>

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
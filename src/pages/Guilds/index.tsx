import React from 'react'
import { FlatList } from 'react-native'

import { Wrapper } from './styles'
import Guild, { GuildProps } from '../../components/Guild'
import ListDivider from '../../components/ListDivider'

type Props = {
  handleGuildSelect: (guild: GuildProps) => void
}

const Guilds = ({ handleGuildSelect }: Props) => {
  const guils = [
    {
      id: '1',
      name: 'Lendários',
      icon: null,
      owner: true,
    },
    {
      id: '2',
      name: 'Free Fire',
      icon: null,
      owner: true,
    },
  ]
  return(
    <Wrapper>
      <FlatList
        data={guils}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Guild data={item} onPress={() => handleGuildSelect(item)} />
        )}
        ItemSeparatorComponent={() => <ListDivider />}
        showsVerticalScrollIndicator={false}
        style={{ width: '100%' }}
      />
    </Wrapper>
  )
}

export default Guilds
import React, { useEffect } from 'react'
import { FlatList } from 'react-native'

import { Wrapper } from './styles'

import Guild from '../../components/Guild'
import ListDivider from '../../components/ListDivider'
import { GuildProps } from '../../components/Guild'
import { useState } from 'react'
import { api } from '../../services/api'
import Loading from '../../components/Loading'



type Props = {
  handleGuildSelect: (guild: GuildProps) => void
}

const Guilds = ({ handleGuildSelect }: Props) => {
  const [guilds, setGuilds] = useState<GuildProps[]>([])
  const [loading, setLoading] = useState(true)

  async function fetchGuilds() {
    const response = await api.get('/users/@me/guilds')
    setGuilds(response.data)
    setLoading(false)
  }

  useEffect(() => {
    fetchGuilds()
  }, [])

  return(
    <Wrapper>
      { loading ? <Loading /> :
      <FlatList
        data={guilds}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Guild data={item} onPress={() => handleGuildSelect(item)} />
        )}
        ItemSeparatorComponent={() => <ListDivider />}
        ListHeaderComponent={() => <ListDivider />}
        contentContainerStyle={{ paddingTop: 103, paddingBottom: 68 }}
        showsVerticalScrollIndicator={false}
        style={{ width: '100%' }}
      />
      }
    </Wrapper>
  )
}

export default Guilds
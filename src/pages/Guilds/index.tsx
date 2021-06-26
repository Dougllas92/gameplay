import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'

import { Wrapper, Bar, CloseModal } from './styles'


import ListDivider from '../../components/ListDivider'
import Background from '../../components/Background'
import Loading from '../../components/Loading'
import Guild from '../../components/Guild'


import { api } from '../../services/api'

import { GuildProps } from '../../configs/interfaces'

type Props = {
  handleGuildSelect: (guild: GuildProps) => void
  handleCloseModal: () => void
}

const Guilds: React.FC<Props> = ({ handleGuildSelect, handleCloseModal }) => {
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
    <CloseModal onPress={handleCloseModal}>
      <Background>
        <Bar />
        <Wrapper>
          { loading ? <Loading /> :
            <>
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
            </>
          }
        </Wrapper>
      </Background>
    </CloseModal>
  )
}

export default Guilds
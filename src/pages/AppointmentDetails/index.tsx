import React, { useEffect } from 'react'
import { FlatList } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'
import { Fontisto } from '@expo/vector-icons'
import { useTheme } from 'styled-components/native'

import { 
  Banner,
  BannerContent,
  Title,
  Subtitle,
  Footer 
} from './styles'
  
import BannerImg from '../../assets/banner.png'
import Background from '../../components/Background'
import Header from '../../components/Header'
import ListHeader from '../../components/ListHeader'
import SizedBox from '../../components/SizedBox'
import Member, { MemberProps } from '../../components/Member'
import ListDivider from '../../components/ListDivider'
import ButtonIcon from '../../components/ButtonIcon'  
import { useRoute } from '@react-navigation/native'
import { Appointmentprops } from '../../components/Appointment'
import { useState } from 'react'
import { Alert } from 'react-native'
import { api } from '../../services/api'
import Loading from '../../components/Loading'
import { Platform } from 'react-native'
import { Share } from 'react-native'
import { Linking } from 'react-native'

type Params = {
  guildSelected: Appointmentprops
}

type GuildWidget = {
  id: string
  name: string
  instant_invite: string
  members: MemberProps[]
  presence_count: number
}

const AppointmentDetails: React.FC = () => {
  const [widget, setWidget] = useState<GuildWidget>({} as GuildWidget)
  const [loading, setLoading] = useState(true)

  const { colors } = useTheme()
  const routes = useRoute()
  const { guildSelected } = routes.params as Params

  async function fetchGuildWidget() {
    try {
      const response = await api.get(`/guilds/${guildSelected.guild.id}/widget.json`)
      setWidget(response.data)

    } catch (err) {
      Alert.alert('Verifique a conexão com o servidor')
    } finally {
      setLoading(false)
    }
  }

  function handleShareInvitation() {
    const message = Platform.OS === 'ios'
    ? `Junte-se a ${guildSelected.guild.name}`
    : widget.instant_invite

    Share.share({
      message,
      url: widget.instant_invite
    })
  }

  function handleOpenGuild() {
    Linking.openURL(widget.instant_invite)
  }

  useEffect(() => {
    fetchGuildWidget()
  },[])

  return(
    <Background>
      <Header 
        title='Detalhes' 
        action={
          guildSelected.guild.owner &&
          <BorderlessButton onPress={handleShareInvitation}>
            <Fontisto name='share' size={24} color={colors.primary} />
          </BorderlessButton>
        }
      />
      <Banner source={BannerImg}>
        <BannerContent>
          <Title>{guildSelected.guild.name}</Title>
          <Subtitle>{guildSelected.description}</Subtitle>
        </BannerContent>
      </Banner>

      <SizedBox height={30} />
      {loading ? <Loading /> :
        <>
          <ListHeader title='Jogadores' subtitle={`Total ${widget.members.length}`} />

          <SizedBox height={24} />
          <FlatList 
            data={widget.members}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Member data={item} />
            )}
            ItemSeparatorComponent={() => <ListDivider />}
            style={{marginLeft: 24}}
          />
        </>
      }

      {guildSelected.guild.owner &&
        <Footer>
            <ButtonIcon title='Entrar na partida' onPress={handleOpenGuild} />
        </Footer>
      }
    </Background>
  )
}

export default AppointmentDetails;
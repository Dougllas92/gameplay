import React, { useEffect, useState } from 'react'
import { FlatList, Alert, Platform, Share, View } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { BorderlessButton } from 'react-native-gesture-handler'
import { useTheme } from 'styled-components/native'
import { Fontisto } from '@expo/vector-icons'
import * as Linking from 'expo-linking'

import {
  BannerView, 
  Banner,
  BannerContent,
  Title,
  Subtitle,
  Footer,
  Aviso 
} from './styles'
  
import ListDivider from '../../components/ListDivider'
import Background from '../../components/Background'
import ListHeader from '../../components/ListHeader'
import ButtonIcon from '../../components/ButtonIcon'  
import SizedBox from '../../components/SizedBox'
import BannerImg from '../../assets/banner.png'
import Loading from '../../components/Loading'
import Header from '../../components/Header'
import Member from '../../components/Member'

import { Appointmentprops, MemberProps } from '../../configs/interfaces'
import { api } from '../../services/api'

type Params = {
  guildSelected: Appointmentprops
}

type GuildWidget = {
  id: string
  name: string
  instant_invite: string
  members: MemberProps[]
}

const AppointmentDetails: React.FC = () => {
  const [widget, setWidget] = useState<GuildWidget>({} as GuildWidget)
  const [loading, setLoading] = useState(true)
  const [status, setStatus] = useState('')

  const { colors } = useTheme()
  const routes = useRoute()
  const { guildSelected } = routes.params as Params

  async function fetchGuildWidget() {
    try {
      const response = await api.get(`/guilds/${guildSelected.guild.id}/widget.json`)
      setWidget(response.data)
    } catch ({ response }) {
      if(response.status === 403) {
        setStatus(`Não foi possivel buscar dados. Widget do servidor desativado.`)
      } else {
        Alert.alert('Verifique a conexão com o servidor')
      }
      
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
    Linking.openURL(`https://discord.com/channels/${guildSelected.guild.id}`)
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

      <BannerView>
        <Banner source={BannerImg}>
          <BannerContent>
            <Title>{guildSelected.guild.name}</Title>
            <Subtitle>{guildSelected.description}</Subtitle>
          </BannerContent>
        </Banner>
      </BannerView>
      
      {loading ? <Loading /> :
        !!status 
        ? 
        <Aviso>
          <Subtitle style={{ textAlign: 'center'}}>{status}</Subtitle>
        </Aviso> :
        
        <>
          <FlatList
            ListHeaderComponent={() => (
              <>
                <SizedBox height={30} />
                <ListHeader 
                  title='Jogadores' 
                  subtitle='Total: 100' 
                />
                <SizedBox height={24} />
              </>
            )}
            data={widget.members}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <View style={{ marginLeft: 24 }}>
                <Member data={item} />
              </View>
            )}
            ItemSeparatorComponent={() => <ListDivider />}
            showsVerticalScrollIndicator={false}
            style={{ marginTop: 1}}
          />
        </>
      }
      <Footer>
        <ButtonIcon title='Entrar na partida' onPress={handleOpenGuild} />
      </Footer>
      
    </Background>
  )
}

export default AppointmentDetails
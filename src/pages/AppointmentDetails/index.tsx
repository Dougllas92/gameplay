import React from 'react'
import { FlatList } from 'react-native'

import { 
  Banner,
  BannerContent,
  Title,
  Subtitle,
  Footer } from './styles'

import BannerImg from '../../assets/banner.png'

import Background from '../../components/Background'
import Header from '../../components/Header'
import { BorderlessButton } from 'react-native-gesture-handler'
import { Fontisto } from '@expo/vector-icons'
import { useTheme } from 'styled-components/native'
import ListHeader from '../../components/ListHeader'
import SizedBox from '../../components/SizedBox'
import Member from '../../components/Member'
import ListDivider from '../../components/ListDivider'
import { ButtonIcon } from '../../components/Button'

const AppointmentDetails: React.FC = () => {
  const { colors } = useTheme()

  const members = [
    {
      id: '1',
      username: 'Douglas',
      avatar_url: 'https://github.com/Dougllas92.png',
      status: 'online'
    },
    {
      id: '2',
      username: 'Sherman',
      avatar_url: 'https://github.com/Dougllas92.png',
      status: 'online'
    },
    {
      id: '3',
      username: 'Gabriel',
      avatar_url: 'https://github.com/Dougllas92.png',
      status: 'offline'
    }
  ]

  return(
    <Background>
      <Header 
        title='Detalhes' 
        action={
          <BorderlessButton>
            <Fontisto name='share' size={24} color={colors.primary} />
          </BorderlessButton>
        }
      />
      <Banner source={BannerImg}>
        <BannerContent>
          <Title>Lendários</Title>
          <Subtitle>
            É hoje que vamos chegar ao challenger sem perder uma partida da md10
          </Subtitle>
        </BannerContent>
      </Banner>

      <SizedBox height={30} />
      <ListHeader title='Jogadores' subtitle='Total 3' />

      <SizedBox height={24} />
      <FlatList 
        data={members}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Member data={item} />
        )}
        ItemSeparatorComponent={() => <ListDivider />}
        style={{marginLeft: 24}}
      />

      <Footer>
          <ButtonIcon title='Entrar na partida' />
      </Footer>
    </Background>
  )
}

export default AppointmentDetails;
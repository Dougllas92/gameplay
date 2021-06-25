import React from 'react'
import { RectButton } from 'react-native-gesture-handler'

import { 
  Wrapper,
  Content,
  User,
  Greeting,
  Username,
  Message 
} from './styles'
import Avatar from '../Avatar'
import { useAuth } from '../../hooks/auth'
import { Alert } from 'react-native'
import SignIn from '../../pages/SignIn'

const Profile: React.FC = () => {
  const { user, SignOut } = useAuth()

  function handleSignOut() {
    Alert.alert('Logout', 'Deseja sair do Gameplay?',
    [
      {
        text: 'Não',
        style: 'cancel'
      },
      {
        text: 'Sim',
        onPress: () => SignOut()
      }
    ])
  }


  return(
    <Wrapper>
      <RectButton onPress={handleSignOut}>
        <Avatar urlImage={user.avatar} />
      </RectButton>
      <Content>
        <User>
          <Greeting>Olá, </Greeting>
          <Username>{user.firstName}</Username>
        </User>

        <Message>Hojé é dia de vitória</Message>
      </Content>
    </Wrapper>
  )
}

export default Profile
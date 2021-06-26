import React, { useState } from 'react'
import { RectButton } from 'react-native-gesture-handler'

import { 
  Wrapper,
  Content,
  User,
  Greeting,
  Username,
  Message 
} from './styles'

import { useAuth } from '../../hooks/auth'

import Logout from '../../pages/Logout'
import ModalView from '../ModalView'
import Avatar from '../Avatar'

const Profile: React.FC = () => {
  const { user } = useAuth()
  const [modalLogoutVisible, setModalLogoutVisible] = useState(false)

  function handleSignOut() {
    setModalLogoutVisible(true)
  }

  function handleLogout() {
    setModalLogoutVisible(false)
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

      <ModalView visible={modalLogoutVisible}>
        <Logout handleCloseModal={handleLogout} />
      </ModalView>
    </Wrapper>
  )
}

export default Profile
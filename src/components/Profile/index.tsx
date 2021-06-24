import React from 'react'

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

const Profile: React.FC = () => {
  const { user } = useAuth()

  return(
    <Wrapper>
      
      <Avatar urlImage={user.avatar} />
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
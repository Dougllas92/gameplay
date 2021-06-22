import React from 'react';

import { 
  Wrapper,
  Content,
  User,
  Greeting,
  Username,
  Message } from './styles';

import Avatar from '../Avatar';

const Profile: React.FC = () => {
  return(
    <Wrapper>
      
      <Avatar urlImage='https://github.com/Dougllas92.png' />
      <Content>
        <User>
          <Greeting>Olá, </Greeting>
          <Username>Douglas</Username>
        </User>

        <Message>Hojé é dia de vitória</Message>
      </Content>
    
    
    </Wrapper>
  )
}

export default Profile;
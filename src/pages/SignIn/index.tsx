import React from 'react'

import { 
  Wrapper,
  Image,
  Content,
  Title,
  Subtitle
} from './styles'

import IllustrationImg from '../../assets/illustration.png'

import { ButtonIcon } from '../../components/Button'

export function SignIn() {
  return(
    <Wrapper>
      <Image
        source={IllustrationImg}
        resizeMode='stretch'
      />
      <Content>
        <Title>
          Organize{'\n'} suas jogatinas{'\n'} facilmente
        </Title>

        <Subtitle>
          Crie grupos para jogar seus games{'\n'} favoritos com seus amigos
        </Subtitle>

        <ButtonIcon 
          title='Entrar com Discord'
          activeOpacity={0.7}
        />
      </Content>
    </Wrapper>
  )
}
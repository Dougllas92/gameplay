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
import Background from '../../components/Background'
import { useNavigation } from '@react-navigation/native'

const SignIn: React.FC = () => {
  const navigation = useNavigation()

  function navigateToHome() {
    navigation.navigate('Home')
  }
  
  return(
    <Background>
      <Wrapper>
        <Image
          source={IllustrationImg}
          resizeMode='stretch'
        />
        <Content>
          <Title>
            Conecte-se {'\n'}e organize suas{'\n'} jogatinas
          </Title>

          <Subtitle>
            Crie grupos para jogar seus games{'\n'} 
            favoritos com seus amigos
          </Subtitle>

          <ButtonIcon 
            title='Entrar com Discord'
            activeOpacity={0.7}
            onPress={navigateToHome}
          />
        </Content>
      </Wrapper>
    </Background>
  )
}

export default SignIn;
import React from 'react'
import { ActivityIndicator } from 'react-native'

import { 
  Wrapper,
  Image,
  Content,
  Title,
  Subtitle
} from './styles'

//images
import IllustrationImg from '../../assets/illustration.png'

//components
import ButtonIcon from '../../components/ButtonIcon'
import Background from '../../components/Background'
import { useTheme } from 'styled-components/native'
import { useAuth } from '../../hooks/auth'

const SignIn: React.FC = () => {
  const { loading, SignIn } = useAuth()
  const { colors } = useTheme()

  async function navigateToHome() {
    try {
      await SignIn()
    } catch(err) {
      console.log(err)      
    }
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

          {loading ? <ActivityIndicator color={colors.primary} />
            :
            <ButtonIcon 
              title='Entrar com Discord'
              activeOpacity={0.7}
              onPress={navigateToHome}
            />
          }
        </Content>
      </Wrapper>
    </Background>
  )
}

export default SignIn;
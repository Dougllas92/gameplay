import React from 'react'

import { 
  Wrapper,
  Header,
  Title,
  Play,
  Actions,
  Action } from './styles'

import Background from '../../components/Background'
import Button from '../../components/Button'
import { useTheme } from 'styled-components/native'
import { useAuth } from '../../hooks/auth'


type Props = {
  handleCloseModal: () => void
}

const Logout = ({ handleCloseModal }: Props): JSX.Element => {
  const { colors } = useTheme()
  const { SignOut } = useAuth()

  function handleTeste() {
    console.log('asd')
  }

  return(
    <Wrapper>
      <Background>
        
        <Header>
          <Title>Deseja sair do Game</Title>
          <Play>Play</Play>
        </Header>
        <Actions>
          <Action>
            <Button 
              title='Não' 
              onPress={handleCloseModal}
              style={{
                backgroundColor: 'transparent',
                borderWidth: 1,
                borderColor: colors.secondary30
              }}
            />
          </Action>
          <Action>
            <Button 
              title='Sim' 
              onPress={SignOut}
            />
          </Action>
        </Actions>
      </Background>  
    </Wrapper>
  )
}

export default Logout
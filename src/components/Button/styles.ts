import styled from 'styled-components/native'

export const Wrapper = styled.TouchableOpacity`
  width: 100%;
  height: 56px;
  background-color: ${({theme}) => theme.colors.primary};
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
`

export const Icon = styled.View`
  width: 56px;
  height: 56px;
  align-items: center;
  justify-content: center;
  border-right-width: 1px;
  border-color: ${({theme}) => theme.colors.line};
`

export const Image = styled.Image``

export const Title = styled.Text`
  flex: 1;
  color: ${({theme}) => theme.colors.heading};
  font-size: 15px;
  text-align: center;
`
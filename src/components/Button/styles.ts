import styled from 'styled-components/native'

export const Wrapper = styled.TouchableOpacity`
  width: 100%;
  height: 56px;
  background-color: ${({theme}) => theme.colors.primary};
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
`
export const Title = styled.Text`
  flex: 1;
  color: ${({theme}) => theme.colors.heading};
  font-size: 15px;
  text-align: center;
  font-family: ${({theme}) => theme.fonts.text500};
`
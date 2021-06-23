import styled from 'styled-components/native'

export const Wrapper = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: 0px 24px;
`

export const Content = styled.View`
  flex: 1;
  justify-content: center;
`
export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.title700};
  color: ${({theme}) => theme.colors.heading};
  font-size: 18px;
  margin-bottom: 11px;
`
export const Type = styled.Text`
  font-family: ${({theme}) => theme.fonts.text400};
  color: ${({theme}) => theme.colors.highlight};
  font-size: 13px;
  margin-bottom: 24px;
`
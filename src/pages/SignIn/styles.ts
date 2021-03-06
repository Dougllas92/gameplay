import styled from 'styled-components/native'

export const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const Image = styled.Image`
  width: 100%;
  height: 360px;
`

export const Content = styled.View`
  margin-top: -40px;
  padding: 0px 40px;
`

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.heading};
  text-align: center;
  font-size: 40px;
  margin-bottom: 16px;
  font-family: ${({theme}) => theme.fonts.title700}
`

export const Subtitle = styled.Text`
  color: ${({theme}) => theme.colors.heading};
  text-align: center;
  font-size: 15px;
  margin-bottom: 64px;
  font-family: ${({theme}) => theme.fonts.text500}
`
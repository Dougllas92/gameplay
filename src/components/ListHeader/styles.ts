import styled from "styled-components/native"

export const Wrapper = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 24px;
`
export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.title700};
  color: ${({theme}) => theme.colors.heading};
  font-size: 18px;
`
export const Subtitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.text400};
  color: ${({theme}) => theme.colors.highlight};
  font-size: 13px;
`
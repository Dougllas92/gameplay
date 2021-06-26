import styled from "styled-components/native"
import { getBottomSpace } from "react-native-iphone-x-helper"

export const Wrapper = styled.View`
  width: 100%;
  background-color: #749;
  position: absolute;
  bottom: 0;
`
export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.title700};
  color: ${({theme}) => theme.colors.heading};
  font-size: 20px;
  margin: 24px 0px;
`
export const Play = styled.Text`
  font-family: ${({theme}) => theme.fonts.title700};
  color: ${({theme}) => theme.colors.primary};
  font-size: 20px;
`
export const Actions = styled.View`
  flex-direction: row;
  padding: 0px 20px 24px;
`
export const Action = styled.View`
  flex: 1;
  margin: 0px 4px;
`;
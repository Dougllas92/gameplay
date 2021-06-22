import styled from "styled-components/native"
import { RectButton } from 'react-native-gesture-handler'
import { LinearGradient } from "expo-linear-gradient"

type Props = {
  check: boolean
}

export const Wrapper = styled(RectButton)`
  width: 104px;
  height: 120px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-right: 8px;
`

export const Gradient = styled(LinearGradient)`
  border-radius: 8px;
`

export const Content = styled.View<Props>`
  opacity: ${(props) => props.check ? 1 : 0.4};
  width: 100px;
  height: 116px;
  background-color: ${({theme}) => theme.colors.secondary40};
  justify-content: space-between;
  align-items: center;
  padding: 7px 0px;
  border-radius: 8px;
`

export const IconView = styled.View<Props>`
  width: 8px;
  height: 8px;
  background-color: ${(props) => props.check ? props.theme.colors.primary : props.theme.colors.secondary100};
  align-self: flex-end;
  margin-right: 7px;
  border-color: ${(props) => props.check ? props.theme.colors.primary : props.theme.colors.secondary50};
  border-width: 1px;
  border-radius: 3px;
`

export const Title = styled.Text``
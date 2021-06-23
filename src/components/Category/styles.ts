import styled from "styled-components/native"
import { RectButton } from 'react-native-gesture-handler'
import { LinearGradient } from "expo-linear-gradient"
import { Animated } from 'react-native'

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

export const Content = styled(Animated.View)<Props>`
  opacity: ${(props) => props.check ? 1 : 0.4};
  width: 100px;
  height: 116px;
  background-color: ${({theme}) => theme.colors.secondary40};
  justify-content: space-between;
  align-items: center;
  padding: 20px 0px;
  border-radius: 8px;
`

export const IconView = styled(Animated.View)<Props>`
  position: absolute;
  top: 7px;
  right: 7px;
  width: 8px;
  height: 8px;
  background-color: ${(props) => props.check ? props.theme.colors.primary : props.theme.colors.secondary100};
  border-color: ${(props) => props.check ? props.theme.colors.primary : props.theme.colors.secondary50};
  border-width: 1px;
  border-radius: 3px;
`

export const Title = styled(Animated.Text)`
  font-family: ${({theme}) => theme.fonts.title700};
  color: ${({theme}) => theme.colors.heading};
  font-size: 15px;
`
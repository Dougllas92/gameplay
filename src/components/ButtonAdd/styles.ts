import styled from "styled-components/native"
import { RectButton } from "react-native-gesture-handler"

export const Wrapper = styled(RectButton)`
  width: 48px;
  height: 48px;
  background-color: ${({theme}) => theme.colors.primary};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`
import styled from "styled-components/native"
import { StyleSheet } from 'react-native'

export const Wrapper = styled.View`
  width: 80%;
  height: ${StyleSheet.hairlineWidth}px;
  background-color: ${({theme}) => theme.colors.secondary40};
  margin: 21px 0px;
  align-self: flex-end;
`
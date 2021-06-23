import styled from "styled-components/native"
import { StyleSheet } from 'react-native'

export const Wrapper = styled.View`
  width: 78%;
  height: ${StyleSheet.hairlineWidth}px;
  background-color: ${({theme}) => theme.colors.secondary40};
  margin-top: 3px;
  margin-bottom: 21px;
  
  align-self: flex-end;
`
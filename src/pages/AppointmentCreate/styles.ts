import { getBottomSpace } from 'react-native-iphone-x-helper';
import styled from "styled-components/native"

export const Wrapper = styled.KeyboardAvoidingView`
  flex: 1;
`

export const Container = styled.ScrollView``

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.title700};
  color: ${({theme}) => theme.colors.heading};
  font-size: 18px;
`;

export const Form = styled.View`
  padding: 0px 20px;
`
export const Select = styled.View`
  flex-direction: row;
  width: 100%;
  height: 68px;
  border-width: 1px;
  border-radius: 8px;
  border-color: ${({theme}) => theme.colors.secondary50};
  align-items: center;
  padding-right: 25px;
  overflow: hidden;
`
export const ImageBlank = styled.View`
  width: 64px;
  height: 68px;
  background-color: ${({theme}) => theme.colors.secondary50};
  border-width: 1px;
  border-radius: 8px;
`
export const SelectBody = styled.View`
  flex: 1;
  align-items: center;
`

export const Field = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`
export const Column = styled.View`
  flex-direction: row;
  align-items: center;
`
export const Divider = styled.Text`
  margin-right: 4px;
  font-size: 15px;
  font-family: ${({theme}) => theme.fonts.text500};
  color: ${({theme}) => theme.colors.highlight};
`
export const Footer = styled.View`
  margin: 20px 0px;
  padding: 0px 24px;
  margin-bottom: 56px;
`
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'

export const Wrapper = styled(LinearGradient)`
  width: 100%;
  height: 104px;
  padding-top: ${getStatusBarHeight()}px;
  padding-left: 24px;
  padding-right: 24px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  flex: 1;
  text-align: center;
  font-family: ${({theme}) => theme.fonts.title700};
  color: ${({theme}) => theme.colors.heading};
  font-size: 20px;
`;
export const Content = styled.View``;
import { getBottomSpace } from 'react-native-iphone-x-helper';
import styled from "styled-components/native"

export const Banner = styled.ImageBackground`
  width: 100%;
  height: 234px;
`
export const BannerContent = styled.View`
  flex: 1;
  justify-content: flex-end;
  padding: 0px 24px;
  margin-bottom: 30px;
`

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.title700};
  color: ${({theme}) => theme.colors.heading};
  font-size: 28px;
`;
export const Subtitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.text400};
  color: ${({theme}) => theme.colors.heading};
  font-size: 13px;
`;

export const Footer = styled.View`
  padding: 20px 24px;
  margin-bottom: ${getBottomSpace()}px;
`

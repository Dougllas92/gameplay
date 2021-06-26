import styled from 'styled-components/native'

export const Wrapper = styled.Modal``

export const Overlay = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.overlay};
  padding-top: 100px;
`
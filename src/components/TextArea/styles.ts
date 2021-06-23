import styled from "styled-components/native"

export const TextInput = styled.TextInput`
  width: 100%;
  height: 95px;
  background-color: ${({theme}) => theme.colors.secondary40};
  color: ${({theme}) => theme.colors.heading};
  border-radius: 8px;
  font-family: ${({theme}) => theme.fonts.text400};
  font-size: 13px;
  margin-right: 4px;
  text-align: center;
`
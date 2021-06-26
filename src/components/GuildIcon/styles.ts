import styled from "styled-components/native"

export const Wrapper = styled.Image`
  width: 66px;
  height: 68px;
`

export const Container = styled.View`
  width: 66px;
  height: 68px;
  border-radius: 8px;
  background-color: ${({theme}) => theme.colors.discord};
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  overflow: hidden;
`
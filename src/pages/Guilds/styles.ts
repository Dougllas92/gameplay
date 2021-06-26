import styled from "styled-components/native"

export const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  padding-top: 24px;
`
export const Bar = styled.View`
  width: 39px;
  height: 2px;
  border-radius: 2px;
  background-color: ${({theme}) => theme.colors.secondary30};
  align-self: center;
  margin-top: 13px;
`

export const CloseModal = styled.TouchableWithoutFeedback``
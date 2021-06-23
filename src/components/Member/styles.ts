import styled from "styled-components/native"

type BulletProps = {
  status: boolean
}

export const Wrapper = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`
export const Content = styled.View``
export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.title700};
  color: ${({theme}) => theme.colors.heading};
  font-size: 18px;
`
export const Status = styled.View`
  flex-direction: row;
  align-items: center;
`

export const BulletStatus = styled.View<BulletProps>`
  background-color: ${(props) => props.status ? props.theme.colors.on : props.theme.colors.primary };
  width: 8px;
  height: 8px;
  border-radius: 4px;
`

export const NameStatus = styled.Text`
  font-family: ${({theme}) => theme.fonts.text400};
  color: ${({theme}) => theme.colors.highlight};
  font-size: 13px;
`

import React from 'react'

import { 
  Wrapper,
  Title,
  Subtitle
} from './styles'

type Props = {
  title: string
  subtitle: string
}

const ListHeader = ({ title, subtitle }: Props): JSX.Element => {
  return(
    <Wrapper>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Wrapper>
  )
}

export default ListHeader
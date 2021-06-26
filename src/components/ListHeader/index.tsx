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

const ListHeader: React.FC<Props> = ({ title, subtitle }) => {
  return(
    <Wrapper>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Wrapper>
  )
}

export default ListHeader
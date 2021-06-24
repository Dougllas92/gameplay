import React from 'react'

import { 
  Wrapper,
  Content,
  Title,
  Status,
  BulletStatus,
  NameStatus
   } from './styles'

import Avatar from '../Avatar'
import SizedBox from '../SizedBox'

export type MemberProps = {
  id: string
  username: string
  avatar_url: string
  status: string
}

type Props = {
  data: MemberProps
}

const Member = ({ data }: Props): JSX.Element => {
  const isOnline = data.status === 'online'

  return(
    <Wrapper>
      <Avatar urlImage={data.avatar_url} />
      
      <Content>
        <Title>{data.username}</Title>
        <Status>
          <BulletStatus  status={isOnline} />
          <SizedBox width={9} />
          <NameStatus>{isOnline ? 'Disponível' : 'Ocupado'}</NameStatus>
        </Status>
      </Content>
    </Wrapper>
  )
}

export default Member;
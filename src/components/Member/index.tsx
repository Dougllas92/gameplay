import React from 'react'

import { 
  Wrapper,
  Content,
  Title,
  Status,
  BulletStatus,
  NameStatus
} from './styles'

import { MemberProps } from '../../configs/interfaces'

import SizedBox from '../SizedBox'
import Avatar from '../Avatar'

type Props = {
  data: MemberProps
}

const Member: React.FC<Props> = ({ data }) => {
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

export default Member
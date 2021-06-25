import React from 'react'

import { 
  Wrapper,
  Container
} from './styles'

import DiscordSvg from '../../assets/discord.svg'

const { CDN_IMAGE } = process.env

type Props = {
  guildId: string
  iconId: string | null
}

const GuildIcon = ({ guildId, iconId }: Props): JSX.Element => {
  const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`
  
  return(
    <Container>
      {iconId ?
        <Wrapper
          source={{ uri }}
          resizeMode='cover'
        />
        :
        <DiscordSvg width={40} height={40} />
      }
    </Container>
  )
}

export default GuildIcon
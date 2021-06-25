import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'
import { useTheme } from 'styled-components/native'

import { 
  Wrapper, 
  Container,
  Content,
  Header,
  Title,
  Category,
  Footer,
  DateInfo,
  Date,
  PlayersInfo,
  Players
} from './styles'

export type GuildProps = {
  id: string
  name: string
  icon: null
  owner: boolean
}

export type Appointmentprops = {
  id: string
  guild: GuildProps
  category: string
  date: string
  description: string
}

type Props = RectButtonProps & {
  data: Appointmentprops
}

import CalendarSvg from '../../assets/calendar.svg'
import PlayerSvg from '../../assets/player.svg'

import { categories } from '../../utils/categories'
import GuildIcon from '../GuildIcon'

const Appointment = ({ data, ...props}: Props): JSX.Element => {
  const { colors } = useTheme()
  const [category] = categories.filter(item => item.id === data.category)
  const { owner } = data.guild

  return(
    <Wrapper {...props}>
      <Container>
      <GuildIcon guildId={data.guild.id} iconId={data.guild.icon} />
        <Content>
          <Header>
            <Title>{data.guild.name }</Title>
            <Category>{ category.title }</Category>
          </Header>

          <Footer>
            <DateInfo>
              <CalendarSvg />
              <Date>{data.date}</Date>
            </DateInfo>

            <PlayersInfo>
              <PlayerSvg fill={ owner ? colors.primary : colors.on} />
              <Players owner={owner}>{owner ? 'Anfitrião' : 'Visitante'}</Players>
            </PlayersInfo>
          </Footer>

        </Content>
      </Container>
    </Wrapper>
  )
}

export default Appointment
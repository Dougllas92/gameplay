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

import CalendarSvg from '../../assets/calendar.svg'
import PlayerSvg from '../../assets/player.svg'

import { Appointmentprops } from '../../configs/interfaces'
import { categories } from '../../utils/categories'
import GuildIcon from '../GuildIcon'

type Props = RectButtonProps & {
  data: Appointmentprops
}

const Appointment: React.FC<Props> = ({ data, ...props}) => {
  const [category] = categories.filter(item => item.id === data.category)
  const { colors } = useTheme()
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
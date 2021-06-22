import React, { useState} from 'react'
import { FlatList } from 'react-native'
import { 
  Wrapper,
  Header,
  Content
} from './styles'

import CategorySelect from '../../components/CategorySelect'
import ButtonAdd from '../../components/ButtonAdd'
import Profile from '../../components/Profile'
import ListHeader from '../../components/ListHeader'
import Appointment from '../../components/Appointment'
import ListDivider from '../../components/ListDivider'
import SizedBox from '../../components/SizedBox'

const Home: React.FC = () => {
  const [category, setCategory] = useState('')

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    {
      id: '2',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    }
  ]

  function handleCategorySelect(categoryId:string) {
    categoryId === category ? setCategory('') : setCategory(categoryId) 
  }

  return(
    <Wrapper>
      <Header>
        <Profile />
        <ButtonAdd />
      </Header>
    
      <CategorySelect categorySelected={category} setCategory={handleCategorySelect} />
      <SizedBox height={24} />

      <Content>
        <ListHeader
          title='Partifas agendadas'
          subtitle='Total 6'
        />
        <SizedBox height={24} />

        <FlatList 
          data={appointments}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          style={{ paddingHorizontal: 24}}
          renderItem={({ item }) => (
            <Appointment data={item} />
          )}
          ItemSeparatorComponent={() => <ListDivider />}
        />
      </Content>

    </Wrapper>
  )
}

export default Home
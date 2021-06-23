import React, { useState} from 'react'
import { FlatList, Animated } from 'react-native'
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
import Background from '../../components/Background'
import { useNavigation } from '@react-navigation/native'

const Home: React.FC = () => {
  const navigation = useNavigation()
  const [category, setCategory] = useState('')
  const [scrollY, setScrollY] = useState(new Animated.Value(0))
  

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
    },
    {
      id: '3',
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
      id: '4',
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
      id: '5',
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
      id: '6',
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
      id: '7',
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
      id: '8',
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
      id: '9',
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
      id: '10',
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

  function navigateToAppointmentDetails() {
    navigation.navigate('AppointmentDetails')
  }

  return(
    <Background>
      <Header
        style={{ marginBottom: scrollY.interpolate({
          inputRange: [0, 60],
          outputRange: [42, 0],
          extrapolate: 'clamp'
        })}}
      >
        <Profile />
        <ButtonAdd onPress={() => navigation.navigate('AppointmentCreate')}/>
      </Header>
    
      <CategorySelect 
        categorySelected={category} 
        setCategory={handleCategorySelect} 
        titleAnimated={scrollY.interpolate({ inputRange: [1,50], outputRange: [1,0], extrapolate: 'clamp'})}  
        contentAnimated={scrollY.interpolate({ inputRange: [0,50], outputRange: [116,95], extrapolate: 'clamp'})}
      />
      <SizedBox height={24} />

      <Content>
        <ListHeader
          title='Partifas agendadas'
          subtitle='Total 6'
        />
        <SizedBox height={24} />
      </Content>
      
      <FlatList
        scrollEventThrottle={16} 
        onScroll={Animated.event([{
          nativeEvent: {
            contentOffset: { y: scrollY}
          }
        }],{ useNativeDriver: false })}
        data={appointments}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        style={{ paddingHorizontal: 24}}
        renderItem={({ item }) => (
          <Appointment 
            data={item} 
            onPress={navigateToAppointmentDetails}
          />
        )}
        ItemSeparatorComponent={() => <ListDivider />}
      />

    </Background>
  )
}

export default Home
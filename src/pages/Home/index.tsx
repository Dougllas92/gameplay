import React, { useState, useCallback } from 'react'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { FlatList, Animated } from 'react-native'

import { 
  Header,
  Content
} from './styles'

import CategorySelect from '../../components/CategorySelect'
import ButtonAdd from '../../components/ButtonAdd'
import Profile from '../../components/Profile'
import ListHeader from '../../components/ListHeader'
import Appointment, { Appointmentprops } from '../../components/Appointment'
import ListDivider from '../../components/ListDivider'
import SizedBox from '../../components/SizedBox'
import Background from '../../components/Background'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { COLLECTION_APPOINTMENTS } from '../../configs/storage'
import Loading from '../../components/Loading'

const Home: React.FC = () => {
  const navigation = useNavigation()
  const [category, setCategory] = useState('')
  const [scrollY, setScrollY] = useState(new Animated.Value(0))
  const [appointments, setAppointments] = useState<Appointmentprops[]>([])
  const [loading, setLoading] = useState(true)

  

  function handleCategorySelect(categoryId:string) {
    categoryId === category ? setCategory('') : setCategory(categoryId) 
  }

  function navigateToAppointmentDetails(guildSelected: Appointmentprops) {
    navigation.navigate('AppointmentDetails', { guildSelected })
  }

  async function loadAppointments() {
    const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS)
    const storage: Appointmentprops[] = response ? JSON.parse(response) : []

    if(category) {
      setAppointments(storage.filter(item => item.category === category))
    } else {
      setAppointments(storage)
    }

    setLoading(false)
  }

  useFocusEffect(useCallback(() =>{
    loadAppointments()
  },[category]))

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

      {loading ? <Loading /> :
        <>
          <Content>
            <ListHeader
              title='Partifas agendadas'
              subtitle={`Total ${appointments.length}`}
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
            contentContainerStyle={{ paddingBottom: 69 }}
            renderItem={({ item }) => (
              <Appointment 
                data={item} 
                onPress={() => navigateToAppointmentDetails(item)}
              />
            )}
            ItemSeparatorComponent={() => <ListDivider />}
          />
        </>
      }

    </Background>
  )
}

export default Home
import React, { useState } from 'react'
import { RectButton } from 'react-native-gesture-handler'
import { useTheme } from 'styled-components/native'
import { Platform, View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import uuid from 'react-native-uuid'

import { 
  Wrapper,
  Container,
  Title,
  Form,
  Select,
  ImageBlank,
  SelectBody,
  Field,
  Column,
  Divider,
  Footer
} from './styles'



import Guilds from '../Guilds'

import CategorySelect from '../../components/CategorySelect'
import Header from '../../components/Header'
import SizedBox from '../../components/SizedBox'
import GuildIcon from '../../components/GuildIcon'
import SmallInput from '../../components/SmallInput'
import TextArea from '../../components/TextArea'
import ListHeader from '../../components/ListHeader'
import ModalView from '../../components/ModalView'
import ButtonIcon from '../../components/ButtonIcon'
import { GuildProps } from '../../components/Guild'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { COLLECTION_APPOINTMENTS } from '../../configs/storage'
import { useNavigation } from '@react-navigation/core'

const AppointmentCreate: React.FC = () => {
  const { colors } = useTheme()
  const navigation = useNavigation()
  const [category, setCategory] = useState('1')
  const [modalVisible, setModalVisible] = useState(false)
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps)


  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [hour, setHour] = useState('')
  const [minute, setMinute] = useState('')
  const [description, setDescription] = useState('')

  function handleOpenGuilds() {
    setModalVisible(true)
  }

  function handleCloseGuilds() {
    setModalVisible(false)
  }

  function handleGuildSelect(guildSelect: GuildProps) {
    setGuild(guildSelect)
    setModalVisible(false)
  }

  function handleCategorySelect(categoryId:string) {
    setCategory(categoryId) 
  }

  async function handleSave() {
    const newAppointment = {
      id: uuid.v4(),
      guild,
      category,
      date: `${day}/${month} às ${hour}:${minute}h`,
      description
    }

    const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS)
    const appointments = storage ? JSON.parse(storage) : []

    await AsyncStorage.setItem(COLLECTION_APPOINTMENTS,
      JSON.stringify([...appointments, newAppointment])
    )

    navigation.navigate('Home')
  }

  return(
    <Wrapper behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >
      <Container>
        <Header 
          title='Agendar partida' 
        />

        <SizedBox height={32} />
        <Title style={{ marginLeft: 24 }}>Categoria</Title>

        <SizedBox height={12} />
        <CategorySelect 
          hasCheckBox
          setCategory={handleCategorySelect}
          categorySelected={category}
        />

        <SizedBox height={32} />
        <Form>
          <RectButton onPress={handleOpenGuilds}>
            <Select>
              {guild.icon ? <GuildIcon guildId={guild.id} iconId={guild.icon} /> : <ImageBlank />}

              <SelectBody>
                <Title>
                {guild.name ? guild.name : 'Selecione um servidor'}
                </Title>
              </SelectBody>

              <Feather name='chevron-right' size={18} color={colors.heading} />
            </Select>
          </RectButton>
        
          <SizedBox height={28} />
          <Field>
            <View>
              <Title>Dia e mês</Title>
              <SizedBox height={12} />
              <Column>
                <SmallInput maxLength={2} onChangeText={setDay} />
                <Divider>/</Divider>
                <SmallInput maxLength={2} onChangeText={setMonth}/>
              </Column>
            </View>

            <View>
              <Title>Horário</Title>
              <SizedBox height={12}  />
              <Column>
                <SmallInput maxLength={2} onChangeText={setHour} />
                <Divider>:</Divider>
                <SmallInput maxLength={2} onChangeText={setMinute} />
              </Column>
            </View>
          </Field>
        </Form>
        
        <SizedBox height={28} />
        <ListHeader title='Descrição' subtitle='Max 100 caracteres' />
        
        <SizedBox height={12} />
        <View style={{ paddingHorizontal: 24 }}>
          <TextArea 
            multiline
            maxLength={100}
            numberOfLines={5}
            autoCorrect={false}
            style={{ textAlignVertical: 'top' }}
            onChangeText={setDescription}
          />
        </View>

        <Footer>
          <ButtonIcon title='Agendar' iconActive={false} onPress={handleSave}/>
        </Footer>
      </Container>
      <ModalView visible={modalVisible} closedModal={handleCloseGuilds}>
        <Guilds handleGuildSelect={handleGuildSelect}/>
      </ModalView>
    </Wrapper>
  )
}

export default AppointmentCreate
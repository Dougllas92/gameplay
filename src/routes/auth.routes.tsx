import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from 'styled-components/native';

import Home from '../pages/Home';
import AppointmentDetails from '../pages/AppointmentDetails';
import AppointmentCreate from '../pages/AppointmentCreate';

const { Navigator, Screen } = createStackNavigator()

const AuthRoutes: React.FC = () => {
  const { colors } = useTheme()

  return(
    <Navigator
      headerMode='none'
      screenOptions={{cardStyle: { backgroundColor: colors.secondary100 }}}
    >
      <Screen name='Home' component={Home} />
      <Screen name='AppointmentDetails' component={AppointmentDetails} />
      <Screen name='AppointmentCreate' component={AppointmentCreate} />
    </Navigator>
  )
}

export default AuthRoutes;
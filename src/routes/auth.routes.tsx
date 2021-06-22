import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../pages/SignIn';
import Home from '../pages/Home';

const { Navigator, Screen } = createStackNavigator()

const AuthRoutes: React.FC = () => {
  return(
    <Navigator
      headerMode='none'
      screenOptions={{cardStyle: {backgroundColor: 'transparent'}}}
    >
      <Screen name='SignIn' component={SignIn} />
      <Screen name='Home' component={Home} />
    </Navigator>
  )
}

export default AuthRoutes;
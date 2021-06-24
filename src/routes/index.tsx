import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { useAuth } from '../hooks/auth'

import SignIn from '../pages/SignIn'
import AuthRoutes from './auth.routes'

const Routes: React.FC = () => {
  const { user } = useAuth()

  return(
      <NavigationContainer>
        { user.id ? <AuthRoutes /> : <SignIn /> }
      </NavigationContainer>
  )
}

export default Routes
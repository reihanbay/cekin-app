import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
//import { SplashStackScreen, AuthStackScreen, AppScreen } from './navigators/AppNavigator'
//import * as FirebaseService from '../src/services/FirebaseService'
import { AuthContext } from './services/Context'
import { AuthStack } from './navigator/Navigator';
//Firebase

//Firebase Analytics
//import firebase from 'react-native-firebase'



const AppStack = () => {
  //FirebaseService.useCallPermission()

  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'LOG_OUT':
          return {
            ...prevState,
            token: null,
            isLoading: false
          }
        case 'SIGN_IN':
          return {
            ...prevState,
            token: 'token2020',
            isLoading: false
          }
        case 'DONE':
          return {
            ...prevState,
            token: 'done2020',
            isLoading: false
          }
        case 'AUTH':
          return {
            ...prevState,
            token: null,
            isLoading: false
          }
      }
    },
    {
      token: null,
      isLoading: true
    }
  )

  const authContext = React.useMemo(() => ({
    logOut: () => dispatch({ type: 'LOG_OUT' }),
    logIn: () => dispatch({ type: 'SIGN_IN' }),
    doAuth: () => dispatch({ type: 'AUTH' }),
    doDone: () => dispatch({ type: 'DONE' })
  }), [])

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer linking={{
        prefixes: ['cekin://'],
        config: {
          screens: {
            Verifikasi: 'verify'
          }
        }
      }}>
        <AuthStack />
        {
          /*
          state.isLoading ? <AuthStack /> : (
            state.token !== null
              ? <SignupScreen />
              : <AuthStack />
          )
          */
        }
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default AppStack
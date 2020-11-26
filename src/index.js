import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AuthContext } from './services/Context'
import { AuthStack, HomeStack, SplashStack } from './navigator/Navigator';
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
  }), [])

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {
          state.isLoading ? <SplashStack /> : (
            state.token !== null
              ? <HomeStack />
              : <AuthStack />
          )
        }
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default AppStack
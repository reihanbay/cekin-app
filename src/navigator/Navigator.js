import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SigninScreen from '../screen/SigninScreen/screen'
import SignupScreen from '../screen/SignupScreen/screen'
import HomeScreen from '../screen/HomeScreen/screen'
import VerificationScreen from '../screen/VerificationScreen/screen'
import SplashScreen from '../screen/SplashScreen/screen'

const Stack = createStackNavigator()

export const AuthStack = () => {
    return (
        <Stack.Navigator initialRouteName={'Splash'}>
            <Stack.Screen
                name='Splash'
                component={SplashScreen}
                options={{
                    headerShown: false,
                    animationEnabled: false,
                }} />
            <Stack.Screen
                name='Masuk'
                component={SigninScreen}
                options={{
                    headerShown: false,
                    animationEnabled: false
                }} />
            <Stack.Screen
                name='Daftar'
                component={SignupScreen}
                options={{
                    headerShown: false,
                    animationEnabled: false
                }} />
            <Stack.Screen
                name='Verifikasi'
                component={VerificationScreen}
                options={{
                    headerShown: false,
                    animationEnabled: false
                }} />
            <Stack.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    headerShown: false,
                    animationEnabled: false
                }} />
        </Stack.Navigator>
    )
}
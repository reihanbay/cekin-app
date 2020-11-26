import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screen/HomeScreen/screen'
import SplashScreen from '../screen/SplashScreen/screen'
import SigninGoogleScreen from '../screen/SigninGoogleScreen/screen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

export const SplashStack = () => {
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
                name='GoogleSignIn'
                component={AuthStack}
                options={{
                    headerShown: false,
                    animationEnabled: false
                }} />
        </Stack.Navigator>
    )
}

export const AuthStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='SignIn'
                component={SigninGoogleScreen}
                options={{
                    headerShown: false,
                    animationEnabled: false
                }} />
        </Stack.Navigator>
    )
}

export const HomeStack = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    headerShown: false,
                    animationEnabled: false
                }} />
            <Tab.Screen
                name='Test'
                component={HomeScreen}
                options={{
                    headerShown: false,
                    animationEnabled: false
                }} />
        </Tab.Navigator>
    )
}
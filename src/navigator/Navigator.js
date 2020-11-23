import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SigninScreen from '../screen/SigninScreen/screen'
import SignupScreen from '../screen/SignupScreen/screen'

const Stack = createStackNavigator()

export const AuthStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Masuk'
                component={SigninScreen}
                options={{
                    headerShown: false
                }} />
            <Stack.Screen
                name='Daftar'
                component={SignupScreen}
                options={{
                    headerShown: false
                }} />
        </Stack.Navigator>
    )
}
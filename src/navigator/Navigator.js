import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SigninScreen from '../screen/SigninScreen/screen'

const Stack = createStackNavigator()

export const AuthStack = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='LoginScren'
                component={SigninScreen}
                options={{
                    headerShown: false
                }} />
        </Stack.Navigator>
    )
}
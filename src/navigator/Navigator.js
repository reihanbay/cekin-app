import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screen/HomeScreen/screen'
import SplashScreen from '../screen/SplashScreen/screen'
import SigninGoogleScreen from '../screen/SigninGoogleScreen/screen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { TabIconDaily, TabIconEvent } from '../component/TabIcon/TabIcon'
import { Colors, Typography } from '../styles'
import { getIsTabBarVisible } from '../utlis/Utils'

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
        <Tab.Navigator
            initialRouteName={"Daily"}
            screenOptions={({ route }) => ({
                tabBarVisible: getIsTabBarVisible(route),
            })}
            backBehavior={'initialRoute'}
            tabBarOptions={{
                activeTintColor: Colors.COLOR_RED,
                inactiveTintColor: Colors.COLOR_LIGHT_GRAY,
                labelStyle: {
                    fontSize: Typography.FONT_SIZE_12,
                    fontFamily: Typography.FONT_NUNITO_REGULAR,
                    lineHeight: Typography.LINE_HEIGHT_14
                },
            }}>
            <Tab.Screen
                name='Daily'
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabIconDaily focused={focused} />
                    ),
                    tabBarLabel: 'Harian'
                }} />
            <Tab.Screen
                name='Event'
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabIconEvent focused={focused} />
                    ),
                    tabBarLabel: 'Acara'
                }} />
        </Tab.Navigator>
    )
}
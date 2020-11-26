import * as React from 'react'
import { Image, View } from 'react-native'
import { IMAGES } from '../../styles/Images'

export const TabIconDaily = ({ focused }) => {
    return (
        <View>
            <Image source={focused ? IMAGES.tabIconDaily : IMAGES.tabIconDailyOff} />
        </View>
    )
}

export const TabIconEvent = ({ focused }) => {
    return (
        <View>
            <Image source={focused ? IMAGES.tabIconEvent : IMAGES.tabIconEventOff} />
        </View>
    )
}
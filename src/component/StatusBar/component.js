import * as React from 'react'
import { StatusBar } from 'react-native'
import { Colors } from '../../styles'

const CustomStatusBar = ({ barColor = Colors.COLOR_WHITE, barStyle = 'dark-content' }) => {
    return <StatusBar backgroundColor={barColor} barStyle={barStyle} />
}

export default CustomStatusBar
import * as React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { defaultStyles } from '../../styles/DefaultText'
import styles from './styles'

const TouchableText = ({ text, onPress, containerStyle, textstyle }) => {
    return <TouchableOpacity onPress={onPress} activeOpacity={.6} style={[styles.container, containerStyle]}>
        <Text style={[defaultStyles.textNormalDefault, textstyle]}>{text}</Text>
    </TouchableOpacity>
}

export default TouchableText
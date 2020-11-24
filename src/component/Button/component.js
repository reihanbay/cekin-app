import * as React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { defaultStyles } from '../../styles/DefaultText'
import styles from './styles'

const Button = ({ onPress = null, title = 'Click Here', containerStyle, textStyle, disabled }) => {
    return (
        <TouchableOpacity disabled={disabled} activeOpacity={.6} onPress={onPress} style={[disabled ? styles.disabled : styles.container, containerStyle]}>
            <Text style={[styles.title, defaultStyles.textNormalDefault, textStyle]}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button
import * as React from 'react'
import { TextInput } from 'react-native'
import { Colors } from '../../styles'
import styles from './styles'

const Input = ({
    style,
    placeholder = 'Enter Text',
    hidePassword,
    keyboardType,
    returnKeyType,
    maxLength,
    onChangeText,
    value
}) => {
    return (
        <TextInput
            style={[styles.container, style]}
            placeholderTextColor={Colors.COLOR_LIGHT_GRAY}
            placeholder={placeholder}
            secureTextEntry={hidePassword}
            keyboardType={keyboardType}
            returnKeyType={returnKeyType}
            maxLength={maxLength}
            onChangeText={onChangeText}
            value={value}
        />
    )
}

export default Input
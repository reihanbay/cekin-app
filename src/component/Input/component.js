import * as React from 'react'
import { TextInput, Text, View } from 'react-native'
import { Colors, Mixins } from '../../styles'
import { defaultStyles } from '../../styles/DefaultText'
import styles from './styles'

const Input = ({
    style,
    placeholder = 'Enter Text',
    hidePassword,
    keyboardType,
    returnKeyType,
    maxLength,
    onChangeText,
    value,
    isError,
    errorMessage = 'error massage here'
}) => {
    const [state, setState] = React.useState('blur')

    return (
        <>
            <TextInput
                style={[state == 'focus' ? styles.containerFocus : styles.container, style]}
                placeholderTextColor={Colors.COLOR_LIGHT_GRAY}
                placeholder={placeholder}
                onFocus={() => setState('focus')}
                onBlur={() => setState('blur')}
                secureTextEntry={hidePassword}
                keyboardType={keyboardType}
                returnKeyType={returnKeyType}
                maxLength={maxLength}
                onChangeText={onChangeText}
                value={value}
            />
            {
                isError ?
                    <View style={styles.errorContainer}>
                        <Text style={[styles.errorMessage, defaultStyles.textSmallDefault]}>{errorMessage}</Text>
                    </View> : null
            }
        </>
    )
}

export default Input
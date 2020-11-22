import * as React from 'react'
import {TextInput} from 'react-native'
import { Colors } from '../../styles'
import styles from './styles'

const Input = ({style, placeholder = 'Enter Text', isPassword = false, keyboardType, returnKeyType, maxLength}, ...props) =>{
    return(
        <TextInput 
            style={[styles.container, style]} 
            placeholderTextColor={Colors.COLOR_LIGHT_GRAY}
            placeholder={placeholder}
            secureTextEntry={isPassword}
            keyboardType={keyboardType}
            returnKeyType={returnKeyType}
            maxLength={maxLength}
            {...props}
        />
    )
}

export default Input
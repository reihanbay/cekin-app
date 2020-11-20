import * as React from 'react'
import {TextInput} from 'react-native'
import { Colors } from '../../styles'
import styles from './styles'

const Input = ({style, placeholder = 'Enter Text'}, ...props) =>{
    return(
        <TextInput 
            {...props} 
            style={[styles.container, style]} 
            placeholderTextColor={Colors.COLOR_LIGHT_GRAY}
            placeholder={placeholder}
        />
    )
}

export default Input
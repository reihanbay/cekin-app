import * as React from 'react'
import { TouchableOpacity, Text, Image } from 'react-native'
import { defaultStyles } from '../../styles/DefaultText'
import { IMAGES } from '../../styles/Images'
import styles from './styles'

const GoogleButton = ({ onPress }) => {
    return (
        <TouchableOpacity activeOpacity={.6} onPress={onPress} style={styles.container}>
            <Image source={IMAGES.google_small} />
            <Text style={[styles.title, defaultStyles.textNormalDefault]}>Masuk dengan Google</Text>
        </TouchableOpacity>
    )
}

export default GoogleButton
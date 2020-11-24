import * as React from 'react'
import { View, Image, StatusBar } from 'react-native'
import { IMAGES } from '../../styles/Images'
import styles from './styles'

const SplashScreen = ({ navigation }) => {
    React.useEffect(() => {
        setTimeout(() => {
            navigation.reset({
                index: 0,
                routes: [{ name: 'Masuk' }],
            })
        }, 2500)
    }, [])

    return (
        <View style={styles.container}>
            <StatusBar hidden />
            <Image source={IMAGES.logo} />
        </View>
    )
}

export default SplashScreen
import * as React from 'react'
import { View, Text, Image, StatusBar } from 'react-native'
import Button from '../../component/Button/component'
import { Colors } from '../../styles'
import { defaultStyles } from '../../styles/DefaultText'
import { IMAGES } from '../../styles/Images'
import styles from './styles'

//firebase
import auth from '@react-native-firebase/auth'

const VerificationScreen = ({ navigation }) => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    function signInWithEmailPassword(email, password) {
        console.log('login with ' + email, password)
        auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                console.log('Signed with email and password')
                navigation.navigate('Home')
            })
            .catch(error => {
                console.log(error.code)
            })
    }

    /**
     *
     * GAP BETWEEN RENDER FUNCTION AND FUNCTIONAL
     *
     */

    const LogoContainer = () => {
        return (
            <View style={styles.topContainer}>
                <Image source={IMAGES.logo} style={styles.logo} />
                <Text style={[defaultStyles.textNormalDefault, styles.subtitle]}>Absen Online dan Event</Text>
            </View>
        )
    }

    const CenterContainer = () => {
        return (
            <View style={styles.centerContainer}>
                <Text style={[styles.textContent, defaultStyles.textNormalDefault]}>Kami sudah mengirim link verifikasi ke example@gmail.com. Mohon verifikasi untuk mengaktifkan akun Anda.</Text>
            </View>
        )
    }

    const ButtonContainer = () => {
        return (
            <View style={styles.buttonContainer}>
                <Button title={'Verifikasi'} containerStyle={styles.button} onPress={() => signInWithEmailPassword(email, password)} />
            </View>
        )
    }

    const BackgroundContainer = () => {
        return (
            <View style={styles.backgroundContainer}>
                <Image source={IMAGES.auth_bg} style={styles.bg} resizeMode={'stretch'} />
            </View>
        )
    }

    const CustomStatusBar = () => {
        return <StatusBar backgroundColor={Colors.COLOR_WHITE} barStyle={'dark-content'} />
    }

    return (
        <View style={styles.container}>
            {CustomStatusBar()}
            {LogoContainer()}
            {CenterContainer()}
            {ButtonContainer()}
            {BackgroundContainer()}
        </View>
    )
}

export default VerificationScreen
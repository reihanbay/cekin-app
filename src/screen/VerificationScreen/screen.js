import * as React from 'react'
import { View, Text, Image, StatusBar, ToastAndroid } from 'react-native'
import Button from '../../component/Button/component'
import { Colors } from '../../styles'
import { defaultStyles } from '../../styles/DefaultText'
import { IMAGES } from '../../styles/Images'
import styles from './styles'

//firebase
import auth from '@react-native-firebase/auth'

const VerificationScreen = ({ navigation }) => {
    const user = auth().currentUser

    function ResendCode() {
        user
            .sendEmailVerification()
            .then(() => {
                ToastAndroid.show('Kode berhasil dikirim ulang!', ToastAndroid.SHORT)
            })
            .catch(error => console.log(error))
    }

    function Verify() {
        user.emailVerified ? gotoHome() : ToastAndroid.show('Akun belum terverifikasi!', ToastAndroid.SHORT)
    }

    function gotoHome() {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }],
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
                <Button title={'Verifikasi'} containerStyle={styles.button} onPress={() => Verify()} />
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
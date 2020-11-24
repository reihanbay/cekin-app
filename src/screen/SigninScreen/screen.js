import * as React from 'react'
import { View, Text, Image, ToastAndroid, StatusBar } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Button from '../../component/Button/component'
import Input from '../../component/Input/component'
import { Colors } from '../../styles'
import { defaultStyles } from '../../styles/DefaultText'
import { IMAGES } from '../../styles/Images'
import styles from './styles'

//firebase
import auth from '@react-native-firebase/auth'
import Indicator from '../../component/Modal/Indicator/component'

const SigninScreen = ({ navigation }) => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [indicator, showIndicator] = React.useState(false)
    const [emailError, setEmailError] = React.useState(false)
    const [emailErrorMsg, setEmailErrorMsg] = React.useState('')
    const [passwordError, setPasswordError] = React.useState(false)
    const [passwordErrorMsg, setPasswordErrorMsg] = React.useState('')
    const user = auth().currentUser

    function signInWithEmailPassword(email, password) {
        showIndicator(true)
        console.log('login with ' + email, password)
        auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                showIndicator(false)
                console.log('Signed with email and password')
                user.emailVerified ? navigation.navigate('Home') : sendVerifivationEmail()
            })
            .catch(error => {
                showIndicator(false)
                console.log(error.code)
                if (error.code == 'auth/invalid-email') {
                    setEmailErrorMsg('Format email salah!')
                    setEmailError(true)
                } else if (error.code == 'auth/user-not-found') {
                    ToastAndroid.show('Pengguna tidak ditemukan!', ToastAndroid.SHORT)
                }
            })
    }

    function sendVerifivationEmail() {
        console.log('sending email verification')
        user
            .sendEmailVerification()
            .then(() => {
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Verifikasi' }],
                })
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

    const InputContainer = () => {
        return (
            <View style={styles.inputContainer}>
                <Input
                    placeholder={'Masukan Email'}
                    value={email}
                    onChangeText={(text) => (setEmail(text), setEmailError(false))}
                    keyboardType={'email-address'}
                    isError={emailError}
                    errorMessage={emailErrorMsg}
                    style={[styles.input, defaultStyles.textNormalDefault]} />
                <Input
                    placeholder={'Masukan 6 digit kode akses'}
                    value={password}
                    keyboardType={'numeric'}
                    returnKeyType={'done'}
                    maxLength={6}
                    onChangeText={(text) => (setPassword(text), setPasswordError(false))}
                    hidePassword
                    isError={passwordError}
                    errorMessage={passwordErrorMsg}
                    style={[styles.input, defaultStyles.textNormalDefault]} />
            </View>
        )
    }

    const ButtonContainer = () => {
        return (
            <View style={styles.buttonContainer}>
                <Button disabled={!email || !password} title={'Masuk'} containerStyle={styles.button} onPress={() => signInWithEmailPassword(email, password)} />
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

    const BottomContainer = () => {
        return (
            <View style={styles.bottomContainer}>
                <Text style={defaultStyles.textNormalDefault}>Belum punya akun?</Text>
                <TouchableOpacity activeOpacity={.6} style={styles.textButton} onPress={() => navigation.navigate('Daftar')}>
                    <Text style={[defaultStyles.textNormalDefault, defaultStyles.textBold]}>Daftar</Text>
                </TouchableOpacity>
            </View>
        )
    }

    const CustomStatusBar = () => {
        return <StatusBar backgroundColor={Colors.COLOR_WHITE} barStyle={'dark-content'} />
    }

    const IndicatorModal = () => {
        return <Indicator visible={indicator} />
    }

    return (
        <View style={styles.container}>
            {CustomStatusBar()}
            {LogoContainer()}
            {InputContainer()}
            {ButtonContainer()}
            {BackgroundContainer()}
            {BottomContainer()}
            {IndicatorModal()}
        </View>
    )
}

export default SigninScreen
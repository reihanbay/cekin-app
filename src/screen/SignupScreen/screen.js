import * as React from 'react'
import { View, Text, Image, ToastAndroid, StatusBar } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Button from '../../component/Button/component'
import Input from '../../component/Input/component'
//import CustomStatusBar from '../../component/StatusBar/component'
import { Colors } from '../../styles'
import { defaultStyles } from '../../styles/DefaultText'
import { IMAGES } from '../../styles/Images'
import styles from './styles'

//firebase
import auth from '@react-native-firebase/auth'
import { WriteToDatabase } from '../../services/Firebase'
import { validateEmail } from '../../utlis/Utils'

const SignupScreen = ({ navigation }) => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [name, setName] = React.useState('')
    const [nameError, setNameError] = React.useState(false)
    const [emailError, setEmailError] = React.useState(false)
    const [passwordError, setPasswordError] = React.useState(false)
    const [nameErrorMsg, setNameErrorMsg] = React.useState('')
    const [emailErrorMsg, setEmailErrorMsg] = React.useState('')
    const [passwordErrorMsg, setPasswordErrorMsg] = React.useState('')
    const [isButtonDisabled, setButtonDisabled] = React.useState(false)

    const registerWithEmailAndPassword = (email, password) => {
        console.log('resgister with ' + email, password)
        auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                console.log('User Account Registered & signed in')
                saveDataToDatabase()
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    setEmailErrorMsg('Email sudah digunakan')
                    setEmailError(true)
                }

                if (error.code === 'auth/invalid-email') {
                    setEmailErrorMsg('Format email salah')
                    setEmailError(true)
                }
            })
    }

    const checkName = () => {
        if (name) {
            if (name.length > 3) {
                return true
            } else {
                setNameErrorMsg('Nama minimal terdiri dari 3 huruf')
                setNameError(true)
                return false
            }
        }
        setNameError(true)
        return false
    }

    const checkEmail = () => {
        if (email) {
            const isEmailValid = validateEmail(email)
            if (isEmailValid) {
                return true
            } else {
                setEmailErrorMsg('Format email salah')
                setEmailError(true)
                return false
            }
        }
        setEmailError(true)
        return false
    }

    const checkPassword = () => {
        if (password) {
            if (password.length == 6) {
                return true
            } else {
                setPasswordErrorMsg('Kode akses harus teridir dari 6 angka')
                setPasswordError(true)
                return false
            }
        }
        setEmailError(true)
        return false
    }


    function saveDataToDatabase() {
        console.log('saving data')
        const data = {
            name: name,
            email: email,
        }
        WriteToDatabase('/Root/Users/', data, true, () => loginWithNewUser(), error => console.log(error))
    }

    function loginWithNewUser() {
        auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                const user = auth().currentUser
                sendVerificationEmail(user)
            })
            .catch(error => {
                if (error.code == 'auth/invalid-email') {
                    ToastAndroid.show('Pengguna tidak ditemukan!', ToastAndroid.SHORT)
                } else if (error.code == 'auth/user-not-found') {
                    ToastAndroid.show('Pengguna tidak ditemukan!', ToastAndroid.SHORT)
                }
            })
    }

    function sendVerificationEmail(user) {
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
            <View behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.inputContainer}>
                <Input
                    placeholder={'Masukan Nama'}
                    value={name}
                    onChangeText={(text) => (setName(text), setNameError(false))}
                    isError={nameError}
                    errorMessage={nameErrorMsg}
                    onBlur={() => checkName()}
                    style={[styles.input, defaultStyles.textNormalDefault]} />
                <Input
                    placeholder={'Masukan Email'}
                    value={email}
                    onChangeText={(text) => (setEmail(text), setEmailError(false))}
                    isError={emailError}
                    errorMessage={emailErrorMsg}
                    keyboardType={'email-address'}
                    onBlur={() => checkEmail()}
                    style={[styles.input, defaultStyles.textNormalDefault]} />
                <Input
                    placeholder={'Masukan 6 digit kode akses'}
                    value={password}
                    maxLength={6}
                    keyboardType={'numeric'}
                    onChangeText={(text) => (setPassword(text), setPasswordError(false))}
                    isError={passwordError}
                    errorMessage={passwordErrorMsg}
                    onBlur={() => checkPassword()}
                    hidePassword
                    style={[styles.input, defaultStyles.textNormalDefault]} />
            </View>
        )
    }

    const ButtonContainer = () => {
        return (
            <View style={styles.buttonContainer}>
                <Button disabled={nameError || emailError || passwordError} title={'Daftar'} containerStyle={styles.button} onPress={() => registerWithEmailAndPassword(email, password)} />
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
                <Text style={defaultStyles.textNormalDefault}>Sudah punya akun?</Text>
                <TouchableOpacity activeOpacity={.6} style={styles.textButton} onPress={() => navigation.goBack()}>
                    <Text style={[defaultStyles.textNormalDefault, defaultStyles.textBold]}>Masuk</Text>
                </TouchableOpacity>
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
            {InputContainer()}
            {ButtonContainer()}
            {BackgroundContainer()}
            {BottomContainer()}
        </View>
    )
}

export default SignupScreen
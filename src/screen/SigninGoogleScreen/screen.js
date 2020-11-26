import * as React from 'react'
import { View, Text, Image, StatusBar, Alert } from 'react-native'
import Button from '../../component/GoogleButton/component'
import { Colors } from '../../styles'
import { defaultStyles } from '../../styles/DefaultText'
import { IMAGES } from '../../styles/Images'
import styles from './styles'

//firebase
import { GoogleSignin } from '@react-native-community/google-signin'
import auth from '@react-native-firebase/auth'
import { AuthContext } from '../../services/Context'

//firebase
import Indicator from '../../component/Modal/Indicator/component'
import { WEB_CLIENT_ID } from '../../services/Firebase'

const SigninGoogleScreen = ({ navigation }) => {
    const { logIn } = React.useContext(AuthContext)

    const [indicator, showIndicator] = React.useState(false)


    React.useEffect(() => {
        configureGoogleSignIn()
    }, [])

    function configureGoogleSignIn() {
        GoogleSignin.configure({
            offlineAccess: false,
            webClientId: WEB_CLIENT_ID
        })
    }
    async function SignInWithGoogle() {
        showIndicator(true)
        const { idToken } = await GoogleSignin.signIn()
        const googleCredential = auth.GoogleAuthProvider.credential(idToken)

        return auth().signInWithCredential(googleCredential)
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
                {ButtonContainer()}
            </View>
        )
    }

    const ButtonContainer = () => {
        return (
            <View style={styles.buttonContainer}>
                <Button onPress={() => SignInWithGoogle().then(() => logIn())} />
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

    const IndicatorModal = () => {
        return <Indicator visible={indicator} />
    }

    return (
        <View style={styles.container}>
            {CustomStatusBar()}
            {LogoContainer()}
            {BackgroundContainer()}
            {IndicatorModal()}
        </View>
    )
}

export default SigninGoogleScreen
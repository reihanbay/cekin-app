import * as React from 'react'
import { View, Image, StatusBar } from 'react-native'
import { IMAGES } from '../../styles/Images'
import styles from './styles'
//firebae
import { AuthContext } from '../../services/Context'
import { WEB_CLIENT_ID } from '../../services/Firebase'
import { GoogleSignin } from '@react-native-community/google-signin'
import { defaultStyles } from '../../styles/DefaultText'

const SplashScreen = ({ navigation }) => {
    const { logIn } = React.useContext(AuthContext)

    React.useEffect(() => {
        configureGoogleSignIn()
    }, [])

    function configureGoogleSignIn() {
        GoogleSignin.configure({
            offlineAccess: false,
            webClientId: WEB_CLIENT_ID
        })
    }

    React.useEffect(() => {
        setTimeout(() => {
            isSignedIn()
        }, 1500)
    }, [])

    const isSignedIn = async () => {
        const isSignedIn = await GoogleSignin.isSignedIn();
        isSignedIn ? gotoHome() : gotoLogin()
    };

    function gotoHome() {
        console.log('user exist')
        logIn()
    }

    function gotoLogin() {
        console.log('user not exist')
        navigation.reset({
            index: 0,
            routes: [{ name: 'GoogleSignIn' }],
        })
    }

    return (
        <View style={styles.container}>
            <StatusBar hidden />
            <Image source={IMAGES.logo} />
        </View>
    )
}

export default SplashScreen
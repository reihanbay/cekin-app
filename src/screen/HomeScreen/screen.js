import * as React from 'react'
import { View, Text, Alert, StatusBar, Image } from 'react-native'
import styles from './styles'

//firebae
import { GoogleSignin } from '@react-native-community/google-signin'
import { AuthContext } from '../../services/Context'
import { WEB_CLIENT_ID } from '../../services/Firebase'

//component
import { Colors } from '../../styles'
import { HomeTabStack } from '../../navigator/Navigator'

const HomeScreen = ({ navigation, route }) => {
    const { logOut } = React.useContext(AuthContext)

    React.useEffect(() => {
        configureGoogleSignIn()
    }, [])

    function configureGoogleSignIn() {
        GoogleSignin.configure({
            offlineAccess: false,
            webClientId: WEB_CLIENT_ID
        })
    }


    async function signOut() {
        try {
            await GoogleSignin.revokeAccess()
            await GoogleSignin.signOut()
        } catch (error) {
            Alert.alert('Something else went wrong... ', error.toString())
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={Colors.COLOR_WHITE} barStyle={'dark-content'} />
            {HomeTabStack()}
        </View>
    )
}

export default HomeScreen
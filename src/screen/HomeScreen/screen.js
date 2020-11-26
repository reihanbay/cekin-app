import * as React from 'react'
import { View, Text, Alert } from 'react-native'
import styles from './styles'
import Button from '../../component/Button/component'

//firebae
import auth from '@react-native-firebase/auth'
import { GoogleSignin } from '@react-native-community/google-signin'
import { AuthContext } from '../../services/Context'
import { WEB_CLIENT_ID } from '../../services/Firebase'

const HomeScreen = ({ navigation }) => {
    const { logOut } = React.useContext(AuthContext)
    //const user = auth().currentUser

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
            <Text style={styles.text}>Hallo</Text>
            <Button title={'logout'} containerStyle={{ width: 312 }} onPress={() => signOut().then(() => logOut())} />
        </View>
    )
}

export default HomeScreen
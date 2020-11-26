import * as React from 'react'
import { View, Text, Image } from 'react-native'
import TouchableText from '../../component/TouchableText/component'
import { defaultStyles } from '../../styles/DefaultText'
import styles from './styles'


//firebae
import { GoogleSignin } from '@react-native-community/google-signin'
import { AuthContext } from '../../services/Context'
import { WEB_CLIENT_ID } from '../../services/Firebase'
import auth from '@react-native-firebase/auth'
import Indicator from '../../component/Modal/Indicator/component'

const DailyScreen = ({ navigation }) => {
    const [indicator, showIndicator] = React.useState(false)

    const user = auth().currentUser

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
        showIndicator(true)
        try {
            await GoogleSignin.revokeAccess()
            await GoogleSignin.signOut()
        } catch (error) {
            Alert.alert('Something else went wrong... ', error.toString())
        }
    }

    function renderHeader() {
        return (
            <View style={styles.header}>
                <View style={styles.leftContainer}>
                    <View style={styles.profileImage}>
                        <Image source={{ uri: user?.photoURL }} style={styles.images} />
                    </View>
                    <Text style={[defaultStyles.textNormalDefault]}>Halo, {user?.displayName}</Text>
                </View>
                <TouchableText text={'Keluar'} textstyle={styles.logoutText} onPress={() => signOut().then(() => logOut())} />
            </View>
        )
    }

    const IndicatorModal = () => {
        return <Indicator visible={indicator} />
    }

    return (
        <View style={styles.container}>
            {renderHeader()}
            <Text>This is daily screen</Text>
            <TouchableText text={'Click here to navigate'} onPress={() => navigation.navigate('Absen')} />
            {IndicatorModal()}
        </View>
    )
}

export default DailyScreen
import * as React from 'react'
import { View, Text, Image, TouchableOpacity, FlatList, StatusBar, Platform, Animated, ScrollView } from 'react-native'
import TouchableText from '../../component/TouchableText/component'
import AnimatedHeader from '../../component/AnimatedHaeder/component'
import { defaultStyles } from '../../styles/DefaultText'
import styles from './styles'


//firebae
import { GoogleSignin } from '@react-native-community/google-signin'
import { AuthContext } from '../../services/Context'
import { ReadDatabase, WEB_CLIENT_ID } from '../../services/Firebase'
import auth from '@react-native-firebase/auth'
import Indicator from '../../component/Modal/Indicator/component'
import { parseNumberDateTime, stringToMD5 } from '../../utlis/Utils'
import { IMAGES } from '../../styles/Images'
import { fetchData } from '../../api/apiUtils'
import { GetDataByHash } from '../../api/api'
import SwipeableModal from '../../component/Modal/SwipeableModal/component'
import { Colors } from '../../styles'

const DailyScreen = ({ navigation }) => {
    const [indicator, showIndicator] = React.useState(false)
    const [name, setName] = React.useState('...')
    const [data, setData] = React.useState([])

    const user = auth().currentUser
    const hash = stringToMD5(user.email)

    const offset = React.useRef(new Animated.Value(0)).current

    const { logOut } = React.useContext(AuthContext)

    React.useEffect(() => {
        configureGoogleSignIn()
    }, [])

    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            console.log('refresh')
            getUserName()
            getData()
        });

        return unsubscribe;
    }, [navigation])

    async function getData() {
        fetchData(GetDataByHash(hash), 'GET', null, 10000, (res) => {
            if (res.result && !res.error) {
                setData(res.result)
            }
        })
    }

    async function getUserName() {
        console.log('get name from db')
        await ReadDatabase(`/Root/Users/${hash}/name/`, (value) => setName(value), error => console.log('error ' + error))
    }

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

    function renderTopContainer() {
        return (
            <>
                <StatusBar backgroundColor={Colors.COLOR_RED} barStyle={'light-content'} />
                <Image source={IMAGES.header0} style={styles.bgImage} resizeMode={'cover'} />
                <View style={styles.header}>
                    <View style={styles.leftContainer}>
                        <View style={styles.leftGroup}>
                            <View style={styles.profileImage}>
                                <Image source={{ uri: user?.photoURL }} style={styles.images} />
                            </View>
                            <Text style={[defaultStyles.textNormalDefault, styles.nameText]}>Halo, {name}</Text>
                        </View>
                    </View>
                    <TouchableText text={'Keluar'} textstyle={styles.logoutText} onPress={() => signOut().then(() => logOut())} />
                </View>
                <TouchableOpacity style={styles.buttonContainer} activeOpacity={.6} onPress={() => name ? navigation.navigate('Absen', { name: name, hash: hash }) : null}>
                    <View style={styles.listImagePlusContainer}>
                        <Text style={[styles.fabText, defaultStyles.textBold, defaultStyles.textLargeDefault]}>+</Text>
                    </View>
                    <View style={styles.listInfo}>
                        <Text style={[defaultStyles.textNormalDefault]}>Tambahkan absen baru</Text>
                    </View>
                </TouchableOpacity>
            </>
        )
    }

    function renderList() {

        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity style={styles.listContainer} activeOpacity={.6} onPress={() => name ? navigation.navigate('Detail',{ name: name, id: item.id, date: item.datetime}): null}>
                    <View style={styles.listImageContainer} />
                    <View style={styles.listInfo}>
                        <Text style={[defaultStyles.textNormalDefault, defaultStyles.textBold]}>{item.name}</Text>
                        <Text>{parseNumberDateTime(item.datetime).date}</Text>
                        <Text style={[defaultStyles.textSmallDefault, styles.listTime]}>dikirim pukul {parseNumberDateTime(item.datetime).time}</Text>
                    </View>
                    <Image source={IMAGES.checklist} />
                </TouchableOpacity>
            )
        }

        return (
            <FlatList
                style={styles.listParent}
                data={data}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.id.toString()}
                contentContainerStyle={styles.list}
                scrollEventThrottle={16}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: offset } } }],
                    { useNativeDriver: false }
                )} />
        )
    }

    function renderSwipeableModal() {
        return (
            <SwipeableModal renderChild={() => renderList()} />
        )
    }

    const IndicatorModal = () => {
        return <Indicator visible={indicator} />
    }

    return (
        <View style={styles.container}>
            {renderTopContainer()}
            {renderSwipeableModal()}
            {IndicatorModal()}
        </View>
    )
}

export default DailyScreen
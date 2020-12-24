import * as React from 'react'
import { View, Text, Image, TouchableOpacity, FlatList, Animated } from 'react-native'
import TouchableText from '../../component/TouchableText/component'
import { defaultStyles } from '../../styles/DefaultText'
import styles from './styles'


//firebae
import { GoogleSignin } from '@react-native-community/google-signin'
import { AuthContext } from '../../services/Context'
import {  ReadDatabase, WEB_CLIENT_ID } from '../../services/Firebase'
import { parseNumberDateTime, stringToMD5 } from '../../utlis/Utils'
import auth from '@react-native-firebase/auth'
import { GetDataByHash } from '../../api/api'
import { fetchData } from '../../api/apiUtils'
import { IMAGES } from '../../styles/Images'
import Indicator from '../../component/Modal/Indicator/component'
import PopUp from '../../component/Modal/PopUp/component'

const AbsenEventScreen = ({ navigation }) => {
    const [indicator, showIndicator] = React.useState(false)
    const [data, setData] = React.useState([])

    const user = auth().currentUser
    const hash = stringToMD5(user.email)

    const offset = React.useRef(new Animated.Value(0)).current
    
    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            console.log('refresh')
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

    function renderList() {

        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity style={styles.listContainer} activeOpacity={.6} onPress={() => name ? navigation.navigate('Detail',{ name: name, id: item.id, date: item.datetime}): null}>
                    <View style={styles.listImageContainer} />
                    <View style={styles.listInfo}>
                        <Text style={[defaultStyles.textNormalDefault, defaultStyles.textBold]}>{item.name}</Text>
                        <Text>{parseNumberDateTime(item.datetime).date}</Text>
                        <Text style={[defaultStyles.textSmallDefault, styles.textGray]}>dikirim pukul {parseNumberDateTime(item.datetime).time}</Text>
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

    function countAbsen(){
        return (
            <View style={styles.countContainer}>
                <Text style={styles.textGray}>
                    30 dari 32 Anggota telah melakukan absen
                </Text>
            </View>
        )
    }

    const IndicatorModal = () => {
        return <Indicator visible={indicator} />
    }
 
    return (
        <View style={styles.container}>
            {countAbsen()}
            {renderList()}
            {IndicatorModal()}
        </View>
    )
}

export default AbsenEventScreen
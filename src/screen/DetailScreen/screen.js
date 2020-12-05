import * as React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { defaultStyles } from '../../styles/DefaultText'
import Input from '../../component/Input/component'
import { Mixins } from '../../styles'
import styles from './styles';
import { fetchData } from '../../api/apiUtils'
import { parseNumberDateTime } from '../../utlis/Utils';
import { GetDetailDatabyId } from '../../api/api'

const DetailScreen = ({ navigation, route }) => {

    const [data, setData] = React.useState([])

    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            console.log('refresh')
            getData()
        });
        return unsubscribe;
    }, [navigation])

    async function getData() {
        fetchData(GetDetailDatabyId(route.params.id), 'GET', null, 10000, (res) => {
            if (res.result && !res.error) {
                setData(res.result)
            }
        })
    }

    const config_display = [
        {
            title: 'Nama Absensi',
            value: route.params.name
        },
        {
            title: 'Tanggal Absensi',
            value: parseNumberDateTime(route.params.date).date
        }
    ]

    function renderPhotoContainer(){
        console.log(data);
        // return imageSelfie ? <Image source={{ uri: imageSelfie?.uri }} style={styles.images} /> : null
        return <View style={styles.images}>
            <Text style={styles.textRed}>Image not found</Text>
        </View>
    }

    function renderTopContainer() {
        return (
            config_display.map((item, index) => {
                return (
                    <View key={index} style={styles.topContainer}>
                        <Text style={[defaultStyles.textNormalDefault, styles.textDesc]}>{item.title}</Text>
                        <Input value={item.value} editable={false} style={[defaultStyles.textNormalDefault, styles.textValue]} />
                    </View>
                )
            })
        )
    }

    return (
        <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: Mixins.scaleSize(24) }} showsVerticalScrollIndicator={false}>
            {renderPhotoContainer()}
            {renderTopContainer()}
        </ScrollView>
    )
}

export default DetailScreen
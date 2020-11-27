import * as React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import Input from '../../component/Input/component'
import { defaultStyles } from '../../styles/DefaultText'
import { getLocaleDate, getLocaleTime, stringToMD5 } from '../../utlis/Utils'
import Button from '../../component/Button/component'
import Geolocation from '@react-native-community/geolocation'
import styles from './styles'
import { cameraLaunchChangePicture } from '../../component/SelfieCapture/component'
import { Mixins } from '../../styles'
import { WriteToDatabase } from '../../services/Firebase'

import Indicator from '../../component/Modal/Indicator/component'

const AbsenScreen = ({ navigation, route }) => {
    const [imageSelfie, setImageSelfie] = React.useState()
    const [position, setPosition] = React.useState({ latitude: null, longitude: null })
    const [indicator, showIndicator] = React.useState(false)

    React.useEffect(() => {
        Geolocation.getCurrentPosition(info => {
            setPosition({ latitude: info.coords.latitude, longitude: info.coords.longitude })
        })
    }, [])

    const config_display = [
        {
            title: 'Nama Absensi',
            value: route.params.name
        },
        {
            title: 'Tanggal Absensi',
            value: getLocaleDate()
        }
    ]

    async function getSelfieImage() {
        const source = await cameraLaunchChangePicture()
        source ? setImageSelfie(source) : console.log('No Image')
    }

    function deleteImage() {
        setImageSelfie(null)
    }

    function submitData() {
        showIndicator(true)
        const times = getLocaleTime()
        const date = getLocaleDate()
        const name = route.params.name
        const hash = route.params.hash
        const img = imageSelfie.data
        const location = position

        const dateHash = stringToMD5(hash + date)

        const data = {
            name: name,
            date: date,
            time: times,
            selfie: img,
            location: location,
            hash: hash
        }

        WriteToDatabase(`/Root/Daily/${dateHash}/`, data, false, () => navigation.goBack(), (error) => console.log(error))
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

    function renderPhotoContainer() {
        return imageSelfie ? <Image source={{ uri: imageSelfie?.uri }} style={styles.images} /> : null
    }

    function renderPhotoButtonContainer() {
        return <Button containerStyle={styles.selectButton} textStyle={styles.textRed} title={!imageSelfie ? 'Ambil Foto Selfie' : 'Hapus Foto'} onPress={() => imageSelfie ? deleteImage() : getSelfieImage()} />
    }

    function renderBottomContainer() {
        return <View style={styles.bottom}>
            <Button disabled={!imageSelfie} title={'Kirim Absen'} onPress={() => submitData()} />
        </View>
    }

    const IndicatorModal = () => {
        return <Indicator visible={indicator} />
    }

    return (
        <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: Mixins.scaleSize(24) }} showsVerticalScrollIndicator={false}>
            {renderPhotoContainer()}
            {renderPhotoButtonContainer()}
            {renderTopContainer()}
            {renderBottomContainer()}
            {IndicatorModal()}
        </ScrollView>
    )
}

export default AbsenScreen
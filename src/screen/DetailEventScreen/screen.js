import * as React from 'react'
import { View, Text } from 'react-native'
import { defaultStyles } from '../../styles/DefaultText'
import Input from '../../component/Input/component'
import Button from '../../component/Button/component'
import styles from '../AddEventScreen/styles'


const DetailEventScreen = ({ navigation, route }) => {

    const config_display_input = [
        {
            title: 'Nama Acara',
            value: 'Masukan Nama Acara'
        },
        {
            title: 'Tanggal Acara',
            value: 'Pilih Tanggal Acara'
        },
        {
            title: 'Waktu Terakhir Absen',
            value: 'Pilih Waktu Terakhir Absen'
        },
        {
            title: 'Deskripsi Acara',
            value: 'Masukan Deskripsi Acara'
        }
    ]

    function renderInput() {
        return (
            config_display_input.map((item, index) => {
                return (
                    <View key={index} style={styles.inputContainer}>
                        <Text style={[defaultStyles.textNormalDefault, styles.textDesc]}>{item.title}</Text>
                        <Input value={item.value} editable={true} style={[defaultStyles.textNormalDefault, styles.textValue]} />
                    </View>
                )
            })
        )
    }

    function renderButton(){
        return(
            <View style={styles.containerButton}>
                <Button onPress={() =>  navigation.navigate('AbsenEvent')} title={'Lihat Absensi'}/>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            {renderInput()}
            {renderButton()}
        </View>
    )
}
export default DetailEventScreen

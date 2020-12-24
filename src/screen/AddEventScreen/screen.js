import * as React from 'react'
import { View, Text } from 'react-native'
import { defaultStyles } from '../../styles/DefaultText'
import Input from '../../component/Input/component'
import Button from '../../component/Button/component'
import styles from '../AddEventScreen/styles'


const AddEventScreen = ({ navigation, route }) => {
    const [event, setEvent] = React.useState({name: null, dateEvent: null, dateLastAbsent: null, desc: null })

    const config_display = [
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
            config_display.map((item, index) => {
                return (
                    <View key={index} style={styles.inputContainer}>
                        <Text style={[defaultStyles.textNormalDefault, styles.textDesc]}>{item.title}</Text>
                        <Input placeholder={item.value} editable={true} style={[defaultStyles.textNormalDefault, styles.textValue]} />
                    </View>
                )
            })
        )
    }

    function renderButton(){
        return(
            <View style={styles.containerButton}>
                <Button onPress={() => navigation.navigate('DetailEvent')} title={'Buat'}/>
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
export default AddEventScreen

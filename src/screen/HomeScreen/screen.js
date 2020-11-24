import * as React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

//firebae
import auth from '@react-native-firebase/auth'
import Button from '../../component/Button/component'


const user = auth().currentUser

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hallo {user.email}</Text>
            <Button title={'logout'} containerStyle={{ width: 312 }} onPress={() => auth().signOut()} />
        </View>
    )
}

export default HomeScreen
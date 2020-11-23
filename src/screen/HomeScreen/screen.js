import * as React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

//firebae
import auth from '@react-native-firebase/auth'


const user = auth().currentUser

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hallo {user.email}</Text>
        </View>
    )
}

export default HomeScreen
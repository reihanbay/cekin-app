import * as React from 'react'
import {View, Text, Image} from 'react-native'
import Input from '../../component/Input/component'
import { IMAGES } from '../../styles/Images'
import styles from './styles'

const SigninScreen = () =>{
    const [email, setEmail] = React.useState('')

    return(
        <View style={styles.container}>
            <Image source={IMAGES.logo} />
            <Input
                placeholder={'Masukan Email'}
                value={email} 
                onChangeText={(text) => setEmail(text)}
                style={styles.input} />
            <Image source={IMAGES.auth_bg} style={styles.bg} resizeMode={'stretch'} />
        </View>
    )
}

export default SigninScreen
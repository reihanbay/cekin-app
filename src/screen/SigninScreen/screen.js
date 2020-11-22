import * as React from 'react'
import {View, Text, Image} from 'react-native'
import Button from '../../component/Button/component'
import Input from '../../component/Input/component'
import { defaultStyles } from '../../styles/DefaultText'
import { IMAGES } from '../../styles/Images'
import styles from './styles'

const SigninScreen = () =>{
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    const LogoContainer = () =>{
        return(
            <View style={styles.topContainer}>
                <Image source={IMAGES.logo} style={styles.logo} />
            </View>
        )
    }

    const InputContainer = () =>{
        return(
            <View style={styles.inputContainer}>
                <Input
                    placeholder={'Masukan Email'}
                    value={email} 
                    onChangeText={(text) => setEmail(text)}
                    keyboardType={'email-address'}
                    style={[styles.input, defaultStyles.textNormalDefault]} />
                <Input
                    placeholder={'Masukan 6 digit kode akses'}
                    value={password}
                    keyboardType={'phone-pad'}
                    returnKeyType={'done'} 
                    maxLength={6}
                    onChangeText={(text) => setPassword(text)}
                    isPassword
                    style={[styles.input, defaultStyles.textNormalDefault]} />
            </View>
        )
    }

    const ButtonContainer = () =>{
        return(
            <View style={styles.buttonContainer}>
                <Button title={'Masuk'} containerStyle={styles.button} />
            </View>
        )
    }

    const BackgroundContainer = () =>{
        return (
            <View style={styles.backgroundContainer}>
                <Image source={IMAGES.auth_bg} style={styles.bg} resizeMode={'stretch'} />
            </View>
        )
    }

    return(
        <View style={styles.container}>
            {LogoContainer()}
            {InputContainer()}
            {ButtonContainer()}
            {BackgroundContainer()}
        </View>
    )
}

export default SigninScreen
import * as React from 'react'
import { View, Text } from 'react-native'
import Modal from 'react-native-modal'
import styles from './styles'

const PopUp = ({ visible, msg, duration = 500, onDurationEnd }) => {
    React.useEffect(() => {
        if (visible) {
            setTimeout(() => {
                console.log('Hide it')
                onDurationEnd()
                clearTimeout()
            }, duration);
        }
    }, [visible])

    return (
        <Modal useNativeDriver isVisible={visible} animationIn={'fadeIn'} animationOut={'fadeOut'} animationInTiming={300} animationOutTiming={300}>
            <View style={styles.container}>
                <View style={styles.child}>
                    <Text>{msg}</Text>
                </View>
            </View>
        </Modal>
    )
}

export default PopUp
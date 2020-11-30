import * as Reacr from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

const PopUp = ({ visible, msg, duration }) => {
    return (
        <Modal isVisible={visible} animationIn={'fadeIn'} animationOut={'fadeOut'} animationInTiming={300} animationOutTiming={300}>
            <View style={styles.container}>
                <View style={styles.child}>
                    <Text>This is Message</Text>
                </View>
            </View>
        </Modal>
    )
}

export default PopUp
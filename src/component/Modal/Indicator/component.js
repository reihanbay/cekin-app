import * as React from 'react'
import { View } from 'react-native'
import Modal from 'react-native-modal'
import { CirclesLoader } from 'react-native-indicator'
import { Colors } from '../../../styles'
import styles from './styles'

const Indicator = ({ visible }) => {
    return (
        <Modal isVisible={visible} animationIn={'fadeIn'} animationOut={'fadeOut'} animationInTiming={300} animationOutTiming={300}>
            <View style={styles.container}>
                <CirclesLoader color={Colors.COLOR_RED} />
            </View>
        </Modal>
    )
}

export default Indicator
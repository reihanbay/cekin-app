import {StyleSheet} from 'react-native'
import { Colors, Mixins } from '../../styles'

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.COLOR_RED,
        height: Mixins.scaleSize(50),
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },

    title: {
        color: Colors.COLOR_WHITE,
        fontWeight: '500'
    }
})

export default styles
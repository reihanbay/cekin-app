import {StyleSheet} from 'react-native'
import { Colors, Mixins } from '../../styles'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colors.COLOR_WHITE,
        justifyContent: 'center',
        padding: Mixins.scaleSize(24)
    },
    bg: {
        width: '100%',
        position: 'absolute',
        bottom: 0
    },
    input: {
        width: '80%'
    }
})

export default styles
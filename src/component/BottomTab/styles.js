import { StyleSheet } from 'react-native'
import { Colors, Mixins } from '../../styles'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: Colors.COLOR_WHITE,
        elevation: 2,
        marginHorizontal: Mixins.scaleSize(52),
        marginBottom: Mixins.scaleSize(24),
        padding: Mixins.scaleSize(14),
        borderRadius: 36
    },

    textFocused: {
        color: Colors.COLOR_RED,
        marginTop: Mixins.scaleSize(4)
    },

    textUnfocused: {
        color: Colors.COLOR_LIGHT_GRAY
    }
})

export default styles
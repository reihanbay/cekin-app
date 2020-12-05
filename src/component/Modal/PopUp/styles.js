import { StyleSheet } from 'react-native'
import { Colors, Mixins } from '../../../styles'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    child: {
        backgroundColor: Colors.COLOR_WHITE,
        paddingVertical: Mixins.scaleSize(18),
        paddingHorizontal: Mixins.scaleSize(24),
        borderRadius: 6
    }
})

export default styles
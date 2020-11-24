import { StyleSheet } from 'react-native'
import { Colors, Mixins } from '../../styles'

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderBottomWidth: .5,
        borderBottomColor: Colors.COLOR_DARK_GRAY,
        height: Mixins.scaleSize(40),
        paddingHorizontal: Mixins.scaleSize(8)
    },

    containerFocus: {
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: Colors.COLOR_RED,
        height: Mixins.scaleSize(40),
        paddingHorizontal: Mixins.scaleSize(8)
    },

    errorMessage: {
        color: Colors.COLOR_RED,
    },

    errorContainer: { alignSelf: 'flex-start', paddingHorizontal: Mixins.scaleSize(24), marginTop: Mixins.scaleSize(-20) }
})

export default styles
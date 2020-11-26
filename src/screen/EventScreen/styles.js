import { StyleSheet } from 'react-native'
import { Colors, Mixins } from '../../styles'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    header: {
        flexDirection: 'row',
        backgroundColor: Colors.COLOR_WHITE,
        padding: Mixins.scaleSize(14)
    },

    leftContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },

    logoutText: {
        color: Colors.COLOR_RED
    },

    images: {
        height: '100%',
        width: '100%',
        borderRadius: 12
    },

    profileImage: {
        height: Mixins.scaleSize(24),
        width: Mixins.scaleSize(24),
        backgroundColor: Colors.COLOR_DARK_GRAY,
        marginRight: Mixins.scaleSize(8),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12
    },
})

export default styles
import { StyleSheet } from 'react-native'
import { Colors, Mixins } from '../../styles'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.COLOR_WHITE,
        padding: Mixins.scaleSize(24)
    },

    textValue: {
        color: Colors.COLOR_BLACK
    },

    textRed: {
        color: Colors.COLOR_RED
    },

    textDesc: {
        color: Colors.COLOR_DARK_GRAY,
        paddingVertical: Mixins.scaleSize(4)
    },

    topContainer: {
        paddingVertical: Mixins.scaleSize(12)
    },

    images: {
        width: '100%',
        height: Mixins.scaleSize(217),
        borderRadius: Mixins.scaleSize(20),
        marginBottom: Mixins.scaleSize(24)
    },

    selectButton: {
        width: '70%',
        alignSelf: 'center',
        backgroundColor: Colors.COLOR_WHITE,
        elevation: 3,
        borderRadius: Mixins.scaleSize(24),
        marginBottom: Mixins.scaleSize(14)
    },

    bottom: {
        marginVertical: Mixins.scaleSize(24)
    }
})

export default styles
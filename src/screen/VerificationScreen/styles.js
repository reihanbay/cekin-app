import { Dimensions, StyleSheet } from 'react-native'
import { Colors, Mixins } from '../../styles'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.COLOR_WHITE,
        padding: Mixins.scaleSize(24)
    },

    topContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: Mixins.scaleSize(36)
    },

    textContent: {
        textAlign: 'center'
    },

    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: Mixins.scaleSize(36)
    },

    button: {
        width: '90%'
    },

    backgroundContainer: {
        width: Dimensions.get('window').width,
        position: 'absolute',
        bottom: 0
    },

    bg: {
        width: '100%'
    },

    subtitle: {
        marginTop: Mixins.scaleSize(8)
    }
})

export default styles
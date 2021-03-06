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

    bottomContainer: {
        flexDirection: 'row',
        alignSelf: 'center'
    },

    inputContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonContainer: {
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

    input: {
        width: '90%',
        marginVertical: Mixins.scaleSize(24)
    },

    textButton: {
        marginHorizontal: Mixins.scaleSize(8)
    },

    subtitle: {
        marginTop: Mixins.scaleSize(8)
    }
})

export default styles
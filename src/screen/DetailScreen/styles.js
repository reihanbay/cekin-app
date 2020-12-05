import { StyleSheet } from 'react-native'
import { Colors, Mixins } from '../../styles'

const styles = StyleSheet.create({
    container:{
        flex : 1,
        backgroundColor : Colors.COLOR_WHITE,
        padding : Mixins.scaleSize(24)
    },
    images: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        width: '100%',
        height: Mixins.scaleSize(217),
        borderRadius: Mixins.scaleSize(20),
        marginBottom: Mixins.scaleSize(24),
        backgroundColor: Colors.COLOR_GRAY,
        borderWidth: 1,
        borderColor: Colors.COLOR_RED
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
})

export default styles
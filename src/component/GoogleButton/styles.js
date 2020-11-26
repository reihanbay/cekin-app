import { StyleSheet } from 'react-native'
import { Colors, Mixins } from '../../styles'

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.COLOR_WHITE,
        height: Mixins.scaleSize(50),
        paddingHorizontal: Mixins.scaleSize(24),
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3
    },

    title: {
        color: Colors.COLOR_BLACK,
        fontWeight: '500',
        paddingHorizontal: Mixins.scaleSize(10)
    }
})

export default styles
import { StyleSheet } from 'react-native'
import { Colors, Mixins, Typography } from '../../styles'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.COLOR_WHITE
    },
    text: {
        fontFamily: Typography.FONT_NUNITO_REGULAR,
        fontWeight: 'normal'
    },
    
})

export default styles
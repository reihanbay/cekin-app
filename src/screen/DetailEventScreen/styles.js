import { StyleSheet } from 'react-native' 
import { Colors, Mixins } from '../../styles'

const styles = StyleSheet.create({
    container:{
        flex : 1,
        backgroundColor : Colors.COLOR_WHITE,
        padding : Mixins.scaleSize(24),
    },
    
    inputContainer: {
        paddingVertical: Mixins.scaleSize(12)
    },

    textDesc: {
        color: Colors.COLOR_DARK_GRAY,
        paddingVertical: Mixins.scaleSize(4)
    },
    textValue: {
        color: Colors.COLOR_BLACK
    },

    containerButton: {
        flex: 1,
        justifyContent: 'flex-end'
    }
    
})

export default styles
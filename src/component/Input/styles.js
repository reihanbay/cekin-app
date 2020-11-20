import {StyleSheet} from 'react-native'
import { Colors, Mixins } from '../../styles'

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderBottomWidth: .5,
        borderBottomColor: Colors.COLOR_DARK_GRAY,
        height: Mixins.scaleSize(40),
        paddingHorizontal: Mixins.scaleSize(8)
    }
})

export default styles
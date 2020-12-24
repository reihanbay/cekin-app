import { mixin } from 'lodash'
import { StyleSheet } from 'react-native'
import { Colors, Mixins } from '../../styles'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: Mixins.scaleSize(20)
    },

    countContainer: {
        margin: Mixins.scaleSize(4)
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

    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.COLOR_RED,
        marginTop: Mixins.scaleSize(14),
        marginHorizontal: Mixins.scaleSize(24),
        marginBottom: Mixins.scaleSize(16),
        borderRadius: 6,
        padding: Mixins.scaleSize(12),
    },
    listParent: {
        flex: 1,
        paddingTop: Mixins.scaleSize(16)
    },
    listImagePlusContainer: {
        backgroundColor: Colors.COLOR_WHITE,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        height: Mixins.scaleSize(31),
        width: Mixins.scaleSize(31)
    },

    fabText: {
        color: Colors.COLOR_RED
    },

    whiteText: {
        color: Colors.COLOR_WHITE
    },

    listContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.COLOR_WHITE,
        marginVertical: Mixins.scaleSize(8),
        marginHorizontal: Mixins.scaleSize(4),
        borderRadius: 6,
        elevation: 2.5,
        padding: Mixins.scaleSize(12)
    },

    listInfo: {
        flex: 1,
        paddingHorizontal: Mixins.scaleSize(10),
    },

    listImageContainer: {
        backgroundColor: Colors.COLOR_RED,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        height: Mixins.scaleSize(62),
        width: Mixins.scaleSize(8)
    },
    textGray: {
        color: Colors.COLOR_DARK_GRAY
    },
})

export default styles
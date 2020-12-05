import * as React from 'react'
import { View, Text, StyleSheet, Dimensions, Animated, ScrollView } from 'react-native'
import { Colors, Mixins } from '../../../styles'
import SlidingPanel from 'react-native-sliding-up-down-panels'

const SwipeableModal = ({ renderChild }) => {

    return (
        <SlidingPanel
            allowAnimation={true}
            useNativeDriver={true}
            headerLayoutHeight={Mixins.scaleSize(400)}
            slidingPanelLayoutHeight={Mixins.scaleSize(425)}
            headerLayout={() =>
                <View style={styles.headerLayoutStyle}>
                    <View style={{ height: 4, width: 40, backgroundColor: 'gray' }} />
                </View>
            }
            slidingPanelLayout={() =>
                <View style={styles.child}>
                    {renderChild()}
                </View>
            }
        />
    )
}

const styles = StyleSheet.create({
    headerLayoutStyle: {
        backgroundColor: Colors.COLOR_WHITE,
        width: Dimensions.get('window').width,
        paddingVertical: Mixins.scaleSize(18),
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        alignItems: 'center'
    },
    child: {
        backgroundColor: Colors.COLOR_WHITE,
        width: Dimensions.get('window').width,
        marginTop: -Mixins.scaleSize(368),
        height: Dimensions.get('window').height
    }
})

export default SwipeableModal
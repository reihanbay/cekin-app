import * as React from 'react';
import { Animated, View, Text } from 'react-native';
import { Mixins } from '../../styles';

const HEADER_MIN_HEIGHT = Mixins.scaleSize(86);
const HEADER_MAX_HEIGHT = Mixins.scaleSize(200);

const AnimatedHeader = ({ animatedValue, child }) => {
    const headerHeight = animatedValue.interpolate({
        inputRange: [0, (HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT)],
        outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
        extrapolate: 'clamp'
    });

    console.log('an : ' + JSON.stringify(animatedValue))

    // ...
    return (
        <Animated.View
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1,
                height: headerHeight,
                backgroundColor: 'lightblue'
            }}>
            {child}
        </Animated.View>
    );
};

export default AnimatedHeader
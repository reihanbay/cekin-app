import * as React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { IMAGES } from '../../styles/Images';
import styles from './styles'

const BottomTab = ({ state, descriptors, navigation }) => {
    const focusedOptions = descriptors[state.routes[state.index].key].options;

    const imageComponent = [
        {
            label: 'Harian'
        },
        {
            label: 'Acara'
        }
    ]

    if (focusedOptions.tabBarVisible === false) {
        return null;
    }

    return (
        <View style={styles.container}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const TabIcon = options.tabBarIcon
                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        key={route.key}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{ flex: 1, alignItems: 'center' }}
                    >
                        <TabIcon focused={isFocused} />
                        <Text style={isFocused ? styles.textFocused : styles.textUnfocused}>
                            {label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

export default BottomTab
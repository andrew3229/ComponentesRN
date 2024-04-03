import { Text, View, StyleSheet, Pressable, Animated, Easing } from 'react-native';
import { colors } from '../../config/theme/theme';
import { useEffect, useRef } from 'react';
import { useAnimation } from '../../presentation/hooks/useAnimation';
export const Animation101Screen = () => {

    const { fadeIn, fadeOut, animatedOpacity, animatedTop, startMovingTopPosition } = useAnimation();
    return (
        <View style={styles.container}>
            <Animated.View
                style={[
                    styles.purpleBox,
                    {
                        opacity: animatedOpacity,
                        transform: [{
                            translateY: animatedTop
                        }]
                    }
                ]}

            />

            <Pressable
                onPress={() => {
                    fadeIn({});
                    startMovingTopPosition({
                        initialPosition: -200,
                        easing: Easing.inOut(Easing.quad),
                        duration: 800
                    });
                }}
                style={{ marginTop: 10 }}
            >
                <Text>FadeIn</Text>
            </Pressable>

            <Pressable
                onPress={() => fadeOut({})}
                style={{ marginTop: 10 }}
            >
                <Text>FadeOut</Text>
            </Pressable>
        </View >
    )
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    purpleBox: {
        backgroundColor: colors.primary,
        width: 150,
        height: 150
    }
});
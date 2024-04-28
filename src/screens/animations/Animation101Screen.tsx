import { Text, View, StyleSheet, Pressable, Animated, Easing } from 'react-native';
import { colors } from '../../config/theme/theme';
import { useContext, useEffect, useRef } from 'react';
import { useAnimation } from '../../presentation/hooks/useAnimation';
import { ThemeContext } from '../../presentation/context/ThemeContext';
import { CustomView } from '../../presentation/components/ui/CustomView';
export const Animation101Screen = () => {

    const { fadeIn, fadeOut, animatedOpacity, animatedTop, startMovingTopPosition } = useAnimation();
    const { colors } = useContext(ThemeContext);

    return (
        <CustomView>
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
                    <Text style={{ color: colors.text }}>FadeIn</Text>
                </Pressable>

                <Pressable
                    onPress={() => fadeOut({})}
                    style={{ marginTop: 10 }}
                >
                    <Text style={{ color: colors.text }}>FadeOut</Text>
                </Pressable>
            </View >
        </CustomView>
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
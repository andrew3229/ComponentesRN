import { useState } from 'react';
import { Text, View, StyleSheet, StyleProp, ImageStyle, Animated, ActivityIndicator } from 'react-native'
import { useAnimation } from '../../hooks/useAnimation';

interface Props {
    uri: string;
    style?: StyleProp<ImageStyle>;
}
export const FadeInImage = ({ uri, style }: Props) => {

    const { animatedOpacity, fadeIn } = useAnimation();

    const [isLoading, setIsLoading] = useState(true);

    return (
        <View
            style={{ justifyContent: 'center', alignItems: 'center' }}
        >
            {
                isLoading && (
                    <ActivityIndicator
                        style={{ position: 'absolute' }}
                        color="grey"
                        size={30}
                    />

                )
            }


            <Animated.Image
                source={{ uri }}
                style={[style, { opacity: animatedOpacity }]}
                onLoadEnd={() => {
                    fadeIn({ duration: 300 });
                    setIsLoading(false);
                }}
            />

        </View>
    )
}
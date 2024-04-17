import { Text, View, StyleSheet, StyleProp, ImageStyle, Animated, ActivityIndicator } from 'react-native'

interface Props {
    uri: string;
    style?: StyleProp<ImageStyle>;
}
export const FadeInImage = ({ uri, style }: Props) => {
    return (
        <View
            style={{ justifyContent: 'center', alignItems: 'center' }}
        >

            <ActivityIndicator
                style={{ position: 'absolute' }}
                color="grey"
                size={30}
            />

            <Animated.Image
                source={{ uri }}
                style={[style]}
            />

        </View>
    )
}
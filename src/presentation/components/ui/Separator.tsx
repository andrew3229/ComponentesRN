import { useContext } from 'react';
import { Text, View, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { ThemeContext } from '../../context/ThemeContext';


interface Props {
    style?: StyleProp<ViewStyle>
}

export const Separator = ( { style }: Props) => {
    const { colors } = useContext(ThemeContext);

    return (
        <View
        style={{
            backgroundColor: colors.cardBackground,
        }}
        >
            <View
            style={[
                {
                    alignSelf: 'center',
                    width: '90%',
                    height: 1,
                    backgroundColor: colors.text,
                    opacity: 0.3,
                    marginVertical: 8
                },
                style
            ]}
        >
        </View>
        </View>
    )
}
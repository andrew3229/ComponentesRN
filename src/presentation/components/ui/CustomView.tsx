import { Text, View, StyleSheet, StyleProp, ViewStyle } from 'react-native'
import { globalStyles } from '../../../config/theme/theme'
import { ReactNode, useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext';

interface Props {
    style?: StyleProp<ViewStyle>;
    children?: ReactNode;
    margin?: boolean;
    backgroundColor?: string
}

export const CustomView = ({ style, children, margin = false , backgroundColor}: Props) => {

    const { colors } = useContext(ThemeContext);
    
    return (
        <View style={[
            globalStyles.mainContainer,
            margin ? globalStyles.globalMargin : null,
            style,
            {backgroundColor: colors.background},
        ]}
        >
            {children}
        </View>
    )
}
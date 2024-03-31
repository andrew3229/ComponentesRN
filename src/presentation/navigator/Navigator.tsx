import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreens } from '../../screens/home/HomeScreens';

const Stack = createStackNavigator();

export const Navigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Home" component={HomeScreens} />
        </Stack.Navigator>
    );
}
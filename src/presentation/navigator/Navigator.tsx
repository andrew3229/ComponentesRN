import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreens } from '../../screens/home/HomeScreens';
import { Animation101Screen } from '../../screens/animations/Animation101Screen';

const Stack = createStackNavigator();

export const Navigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Home" component={HomeScreens} />
            <Stack.Screen name="Animation101Screen" component={Animation101Screen} />
        </Stack.Navigator>
    );
}
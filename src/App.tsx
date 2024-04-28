import 'react-native-gesture-handler';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { Navigator } from './presentation/navigator/Navigator';
import { PropsWithChildren, useContext } from 'react';
import { ThemeContext, ThemeProvider } from './presentation/context/ThemeContext';
import { darkColors } from './config/theme/theme';


const AppTheme = ({ children }: PropsWithChildren) => {

  return (
    <ThemeProvider>
      <AppNavigation>
        {children}
      </AppNavigation>
    </ThemeProvider>
  )
}

const AppNavigation = ({ children }: PropsWithChildren) => {
  const { isDark } = useContext(ThemeContext);

  return (
    <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme} >
      {children}
    </NavigationContainer>
  )
}


export const App = () => {
  return (
    <AppTheme>
      <Navigator />
    </AppTheme>
  )
}
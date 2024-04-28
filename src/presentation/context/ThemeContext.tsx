import { createContext, useEffect, useState } from "react";
import { ThemeColors, darkColors, lightColors } from "../../config/theme/theme";
import { useColorScheme } from "react-native";

type ThemeColor = 'light' | 'dark';

interface ThemeContextProps {
    curretTheme: ThemeColor;
    colors: ThemeColors;
    isDark: boolean;
    setTheme: (theme: ThemeColor) => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);



export const ThemeProvider = ({ children }: any) => {

    const colorSheme = useColorScheme();
    const [curretTheme, setCurrentTheme] = useState<ThemeColor>('light');


    useEffect(() => {
        if (colorSheme === 'dark') {
            setCurrentTheme('dark');
        } else {
            setCurrentTheme('light');
        }
    }, [colorSheme])

    const setTheme = (theme: ThemeColor) => {
        setCurrentTheme(theme);
    }

    return (
        <ThemeContext.Provider
            value={{
                curretTheme: curretTheme,
                colors: (curretTheme === 'light' ? lightColors : darkColors),
                setTheme,
                isDark: (curretTheme !== 'light'),
            }}
        >
            {children}
        </ThemeContext.Provider>
    )

}
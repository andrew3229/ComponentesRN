import { Title } from '../../presentation/components/ui/Title'
import { CustomView } from '../../presentation/components/ui/CustomView'
import { ScrollView } from 'react-native'
import { RefreshControl } from 'react-native-gesture-handler'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useContext, useState } from 'react'
import { globalStyles } from '../../config/theme/theme'
import { ThemeContext } from '../../presentation/context/ThemeContext'
export const PullToRefreshScreen = () => {

    const [isRefreshin, setIsRefreshin] = useState(false);

    const { top } = useSafeAreaInsets();
    const onRefresh = () => {
        setIsRefreshin(true);

        setTimeout(() => {
            setIsRefreshin(false);
        }, 2000);
    }   

    const { colors } = useContext(ThemeContext);


    return (
        <CustomView>

            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={isRefreshin}
                        progressViewOffset={top}
                        onRefresh={onRefresh}
                        colors={[colors.primary, 'red', 'orange', 'green']}
                    />
                }

                style={[globalStyles.mainContainer, globalStyles.globalMargin]}
            >

                <Title
                    text='Pull To Refresh'
                />
            </ScrollView>
        </CustomView>
    )
}
import { Title } from '../../presentation/components/ui/Title'
import { CustomView } from '../../presentation/components/ui/CustomView'
import { ScrollView } from 'react-native'
import { RefreshControl } from 'react-native-gesture-handler'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useState } from 'react'
import { colors, globalStyles } from '../../config/theme/theme'
export const PullToRefreshScreen = () => {

    const [isRefreshin, setIsRefreshin] = useState(false);

    const { top } = useSafeAreaInsets();
    const onRefresh = () => {
        setIsRefreshin(true);

        setTimeout(() => {
            setIsRefreshin(false);
        }, 2000);
    }

    return (

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
    )
}
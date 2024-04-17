import { useState } from 'react'
import { Text, View, StyleSheet, Image, ActivityIndicator } from 'react-native'
import { CustomView } from '../../presentation/components/ui/CustomView'
import { Title } from '../../presentation/components/ui/Title'
import { FlatList } from 'react-native-gesture-handler'
import { colors } from '../../config/theme/theme'
import { FadeInImage } from '../../presentation/components/ui/FadeInImage'
export const InfiniteScrollScreen = () => {

    const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5])

    const loadMore = () => {
        const newArray = Array.from({ length: 5 }).map((_, index) => numbers.length + index)

        setNumbers([...numbers, ...newArray])


    }

    return (
        <View style={{ backgroundColor: 'black' }}>

            <FlatList
                data={numbers}
                onEndReached={loadMore}
                onEndReachedThreshold={0.5}
                keyExtractor={(item) => item.toString()}
                renderItem={({ item }) => <ListItem number={item} />}

                ListFooterComponent={() => (
                    <View style={{ height: 150, justifyContent: 'center' }}>
                        <ActivityIndicator size={30} color={colors.primary} />
                    </View>
                )}

            />
        </View>

    )
}


interface ListProps {
    number: number;
}

const ListItem = ({ number }: ListProps) => {

    return (

        <FadeInImage
            uri={`https://picsum.photos/id/${number}/500/400`}
            style={{
                height: 400,
                width: '100%',
            }}
        />
        // <Image
        //     source={{ uri: `https://picsum.photos/id/${number}/500/400` }}
        //     style={{
        //         height: 400,
        //         width: '100%',
        //     }}
        // />
    )
}
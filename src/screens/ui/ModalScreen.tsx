import { Text, View, StyleSheet, Modal } from 'react-native'
import { CustomView } from '../../presentation/components/ui/CustomView'
import { Title } from '../../presentation/components/ui/Title'
import { Button } from '../../presentation/components/ui/Button'
import { useContext, useState } from 'react'
import { ThemeContext } from '../../presentation/context/ThemeContext'
export const ModalScreen = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { colors } = useContext(ThemeContext);

    return (

        <CustomView margin>
            <Title text='Modal' safe />

            <Button text='Abrir Modal' onPress={() => setIsVisible(true)} />

            <Modal
                visible={isVisible}
                animationType='slide'
            >
                <View
                    style={{
                        flex: 1,
                        backgroundColor:  colors.background,
                    }}
                >

                    <View
                        style={{
                            paddingHorizontal: 10,
                        }}
                    >
                        <Title text='Modal Contenido' safe />
                    </View>


                    <View style={{ flex: 1 }} />

                    <Button text='Cerrar Modal' onPress={() => setIsVisible(false)}
                        style={{ height: 50, borderRadius: 0 }}
                    />

                </View>
            </Modal>
        </CustomView>
    )
}
import { Text, View, StyleSheet, Modal } from 'react-native'
import { CustomView } from '../../presentation/components/ui/CustomView'
import { Title } from '../../presentation/components/ui/Title'
import { Button } from '../../presentation/components/ui/Button'
import { useState } from 'react'
export const ModalScreen = () => {
    const [isVisible, setIsVisible] = useState(false);
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
                        backgroundColor: 'rgba(0,0,0,0.1)',
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
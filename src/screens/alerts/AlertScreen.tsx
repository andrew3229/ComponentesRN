import { Text, View, StyleSheet, Alert } from 'react-native'
import { Title } from '../../presentation/components/ui/Title'
import { CustomView } from '../../presentation/components/ui/CustomView'
import { globalStyles } from '../../config/theme/theme'
import { Button } from '../../presentation/components/ui/Button'
export const AlertScreen = () => {

    const createTwoButtonAlert = () =>
        Alert.alert('Titulo de Alerta', 'Esta seguro de realizar esta accion?', [
            {
                text: 'Cancelar',
                onPress: () => console.log('Cancel Pressed'),
                style: 'destructive',
            },
            { text: 'Continuar', onPress: () => console.log('OK Pressed') },
        ], {
            userInterfaceStyle: 'dark'
        });

    const createThreeButtonAlert = () =>
        Alert.alert('Alert Title', 'My Alert Msg', [
            {
                text: 'Ask me later',
                onPress: () => console.log('Ask me later pressed'),
            },
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
            {
                cancelable: true,
                onDismiss: () => console.log('onDismiss'),
            });

    return (
        <CustomView style={globalStyles.globalMargin}>
            <Title text='Alert Screen' />

            <Button
                text='Alerta - 2 Botones'
                onPress={createTwoButtonAlert}
            />

            <View style={{ height: 10 }} />

            <Button
                text='Alerta - 3 Botones'
                onPress={createThreeButtonAlert}
            />

            <View style={{ height: 10 }} />

            <Button
                text='Prompt - Input'
                onPress={() => { }}
            />
        </CustomView>
    )
}
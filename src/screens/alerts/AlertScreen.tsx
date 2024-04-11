import { Text, View, StyleSheet, Alert } from 'react-native'
import { Title } from '../../presentation/components/ui/Title'
import { CustomView } from '../../presentation/components/ui/CustomView'
import { globalStyles } from '../../config/theme/theme'
import { Button } from '../../presentation/components/ui/Button'
import prompt from 'react-native-prompt-android';
import { showPromptAdapter } from '../../config/theme/adapters/prompt.adapter'



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


    const showPrompt = () => {

        showPromptAdapter({
            title: 'Cual es nombre',
            subTitle: 'Lorem ipsum dolor sit amet.',
            defaultValue: 'Valor por defecto',
            placeholder: 'Placeholder',
            buttons: [
                {
                    text: 'Cancelar',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'destructive',
                },
                { text: 'Continuar', onPress: () => console.log('OK Pressed') },
            ]

        })


        // Alert.prompt(
        //     'Cual es nombre',
        //     'Lorem ipsum dolor sit amet.',
        //     (valor: string) => console.log('valor:', valor),
        //     'secure-text',
        //     'Valor por defecto',
        //     'number-pad'

        // )
    }
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
                onPress={showPrompt}
            />
        </CustomView>
    )
}
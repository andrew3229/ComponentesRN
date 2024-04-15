import { Text, View, StyleSheet, TextInput,ScrollView } from 'react-native'
import { CustomView } from '../../presentation/components/ui/CustomView'
import { Title } from '../../presentation/components/ui/Title'
import { globalStyles } from '../../config/theme/theme'
import { Card } from '../../presentation/components/ui/Card'
import { useState } from 'react'
export const TextInputScreen = () => {

    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
    })

    return (
        <ScrollView>
            <CustomView margin>
                <Title text='Text Input Screen' safe />

                <Card>
                    <TextInput
                        style={globalStyles.input}
                        placeholder='Nombre Completo'
                        autoCapitalize={'words'}
                        autoCorrect={false}
                        onChangeText={(value) => setForm({ ...form, name: value })}
                    />

                    <TextInput
                        style={globalStyles.input}
                        placeholder='Correo Electronico'
                        autoCapitalize={'none'}
                        autoCorrect={false}
                        keyboardType='email-address'
                        onChangeText={(value) => setForm({ ...form, email: value })}
                    />
                    <TextInput
                        style={globalStyles.input}
                        placeholder='Telefono'
                        keyboardType='phone-pad'
                        onChangeText={(value) => setForm({ ...form, phone: value })}
                    />
                </Card>

                <View style={{ height: 10 }} />

                <Card>
                    <Text>{JSON.stringify(form, null, 2)}</Text>
                </Card>

                <Card>
                    <Text>{JSON.stringify(form, null, 2)}</Text>
                </Card>

                <Card>
                    <Text>{JSON.stringify(form, null, 2)}</Text>
                </Card>

                <Card>
                    <Text>{JSON.stringify(form, null, 2)}</Text>
                </Card>

                <Card>
                    <Text>{JSON.stringify(form, null, 2)}</Text>
                </Card>

                <Card>
                    <Text>{JSON.stringify(form, null, 2)}</Text>
                </Card>

                <Card>
                    <Text>{JSON.stringify(form, null, 2)}</Text>
                </Card>

                <Card>
                    <Text>{JSON.stringify(form, null, 2)}</Text>
                </Card>

                <Card>
                    <Text>{JSON.stringify(form, null, 2)}</Text>
                </Card>

                <Card>
                    <Text>{JSON.stringify(form, null, 2)}</Text>
                </Card>

                <Card>
                    <Text>{JSON.stringify(form, null, 2)}</Text>
                </Card>

                <Card>
                    <Text>{JSON.stringify(form, null, 2)}</Text>
                </Card>

                <Card>
                    <Text>{JSON.stringify(form, null, 2)}</Text>
                </Card>

                <Card>
                    <Text>{JSON.stringify(form, null, 2)}</Text>
                </Card>

                <Card>
                    <Text>{JSON.stringify(form, null, 2)}</Text>
                </Card>

                <Card>
                    <Text>{JSON.stringify(form, null, 2)}</Text>
                </Card>

                <Card>
                    <Text>{JSON.stringify(form, null, 2)}</Text>
                </Card>

                <Card>
                    <Text>{JSON.stringify(form, null, 2)}</Text>
                </Card>

                <Card>
                    <Text>{JSON.stringify(form, null, 2)}</Text>
                </Card>

                <Card>
                    <Text>{JSON.stringify(form, null, 2)}</Text>
                </Card>

                <Card>
                    <Text>{JSON.stringify(form, null, 2)}</Text>
                </Card>


            </CustomView>
        </ScrollView>
    )
}
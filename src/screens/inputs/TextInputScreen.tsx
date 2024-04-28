import { Text, View, StyleSheet, TextInput, ScrollView } from 'react-native'
import { CustomView } from '../../presentation/components/ui/CustomView'
import { Title } from '../../presentation/components/ui/Title'
import { globalStyles } from '../../config/theme/theme'
import { Card } from '../../presentation/components/ui/Card'
import { useContext, useState } from 'react'
import { ThemeContext } from '../../presentation/context/ThemeContext'
export const TextInputScreen = () => {

    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
    })

    const { colors } = useContext(ThemeContext);


    return (
        <ScrollView>
            <CustomView margin>
                <Title text='Text Input Screen' safe />

                <Card>
                    <TextInput
                        style={[globalStyles.input,{borderColor: colors.text}]}
                        placeholder='Nombre Completo'
                        autoCapitalize={'words'}
                        autoCorrect={false}
                        onChangeText={(value) => setForm({ ...form, name: value })}
                    />

                    <TextInput
                        style={[globalStyles.input,{borderColor: colors.text}]}
                        placeholder='Correo Electronico'
                        autoCapitalize={'none'}
                        autoCorrect={false}
                        keyboardType='email-address'
                        onChangeText={(value) => setForm({ ...form, email: value })}
                    />
                    <TextInput
                        style={[globalStyles.input, {borderColor: colors.text}]}
                        placeholder='Telefono'
                        keyboardType='phone-pad'
                        onChangeText={(value) => setForm({ ...form, phone: value })}
                    />
                </Card>

                <View style={{ height: 10 }} />

                <Card>
                    <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
                </Card>

                <Card>
                    <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
                </Card>

                <Card>
                    <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
                </Card>

                <Card>
                    <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
                </Card>

                <Card>
                    <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
                </Card>

                <Card>
                    <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
                </Card>

                <Card>
                    <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
                </Card>

                <Card>
                    <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
                </Card>

                <Card>
                    <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
                </Card>

                <Card>
                    <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
                </Card>

                <Card>
                    <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
                </Card>

                <Card>
                    <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
                </Card>

                <Card>
                    <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
                </Card>

                <Card>
                    <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
                </Card>

                <Card>
                    <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
                </Card>

                <Card>
                    <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
                </Card>

                <Card>
                    <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
                </Card>

                <Card>
                    <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
                </Card>

                <Card>
                    <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
                </Card>

                <Card>
                    <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
                </Card>

                <Card>
                    <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
                </Card>


            </CustomView>
        </ScrollView>
    )
}
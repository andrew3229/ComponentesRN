import { Text, View, } from 'react-native'
import { CustomView } from '../../presentation/components/ui/CustomView'
import { Title } from '../../presentation/components/ui/Title'
import { Button } from '../../presentation/components/ui/Button'
import { useContext } from 'react'
import { ThemeContext } from '../../presentation/context/ThemeContext'

export default function ChangeThemeScreen() {

  const { setTheme, curretTheme, colors } = useContext(ThemeContext);

  return (
    <CustomView margin>
      <Title text={`Cambia el tema ${curretTheme}`} safe />

      <Button
        text='Ligth'
        onPress={() => setTheme('light')}
      />

      <View style={{ height: 20 }} />

      <Button
        text='Dark'
        onPress={() => setTheme('dark')}
      />

      <View style={{ height: 20 }} />

      <Text style={{ color: colors.text }}>
        {JSON.stringify(colors, null, 3)}
      </Text>

    </CustomView>
  )
}
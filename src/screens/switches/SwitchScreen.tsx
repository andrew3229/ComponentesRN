import { useContext, useState } from 'react';
import { CustomView } from '../../presentation/components/ui/CustomView'
import { Card } from '../../presentation/components/ui/Card';
import { Switch } from 'react-native-gesture-handler';
import { CustomSwitch } from '../../presentation/components/ui/CustomSwitch';
import { Separator } from '../../presentation/components/ui/Separator';
import { ThemeContext } from '../../presentation/context/ThemeContext';
export const SwitchScreen = () => {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const { colors } = useContext(ThemeContext);


    const [state, setState] = useState({
        isActive: true,
        isHungry: false,
        isHappy: true
    })

    return (
        <CustomView >

            <Card>
                <CustomSwitch
                    isOn={state.isActive}
                    onChange={value => setState({ ...state, isActive: value })}
                    text='Esta Activo?'
                />

                <Separator />

                <CustomSwitch
                    isOn={state.isHungry}
                    onChange={value => setState({ ...state, isHungry: value })}
                    text='Tiene Hambre?'
                />

                <Separator />
                <CustomSwitch
                    isOn={state.isHappy}
                    onChange={value => setState({ ...state, isHappy: value })}
                    text='Es Feliz?'
                />
            </Card>
        </CustomView>
    )
}
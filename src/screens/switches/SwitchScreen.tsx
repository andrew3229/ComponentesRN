import { useState } from 'react';
import { CustomView } from '../../presentation/components/ui/CustomView'
import { Card } from '../../presentation/components/ui/Card';
import { Switch } from 'react-native-gesture-handler';
import { CustomSwitch } from '../../presentation/components/ui/CustomSwitch';
export const SwitchScreen = () => {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [state, setState] = useState({
        isActive: true,
        isHungry: false,
        isHappy: true
    })

    return (
        <CustomView style={{ marginTop: 100, paddingHorizontal: 10 }}>

            <Card>
                <CustomSwitch
                    isOn={state.isActive}
                    onChange={(value) => setState({ ...state, isActive: value })}
                    text='Esta Activo?'
                />


                <CustomSwitch
                    isOn={state.isHungry}
                    onChange={(value) => setState({ ...state, isHungry: value })}
                    text='Tiene Hambre?'
                />

                <CustomSwitch
                    isOn={state.isHappy}
                    onChange={(value) => setState({ ...state, isHappy: value })}
                    text='Es Feliz?'
                />
            </Card>
        </CustomView>
    )
}
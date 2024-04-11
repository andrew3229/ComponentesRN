import prompt from "react-native-prompt-android";

interface Options {
    title: string;
    subTitle?: string;
    buttons?: PromptButtons[];
    promptType?: 'default' | 'secure-text' | 'plain-text' | 'login-password';
    placeholder?: string;
    defaultValue?: string;
}

interface PromptButtons {
    text: string;
    onPress: () => void;
    style?: 'default' | 'cancel' | 'destructive';
}

export const showPromptAdapter = ({ title, subTitle, buttons = [], promptType = 'default', placeholder = '', defaultValue }: Options) => {
    prompt(
        title,
        subTitle,
        buttons,
        {
            type: promptType,
            cancelable: false,
            defaultValue: defaultValue,
            placeholder: placeholder
        }
    );
}
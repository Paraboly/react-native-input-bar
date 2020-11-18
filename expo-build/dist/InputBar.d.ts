import * as React from "react";
import { StyleProp, ViewStyle, TextInputProps, TextInputAndroidProps } from "react-native";
export declare type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
export interface ISource {
    source: string | {
        uri: string;
    };
}
export interface IInputBarProps extends TextInputProps, TextInputAndroidProps {
    style?: CustomStyleProp;
    width?: number;
    height?: number | null;
    value?: string;
    borderRadius?: number;
    minHeight?: number;
    maxHeight?: number;
    textColor?: string;
    multiline?: boolean;
    shadowColor?: string;
    placeholder?: string;
    sendIconImageSource?: ISource;
    secondaryIconImageSource?: ISource;
    onChangeText?: (text: string) => void;
    textInputStyle?: any;
    backgroundColor?: string;
    ImageComponent?: any;
    SpinnerType?: any;
    spinnerSize?: number;
    spinnerColor?: string;
    spinnerVisibility?: boolean;
    disableSendIcon?: boolean;
    disableSecondaryIcon?: boolean;
    onBlur?: () => void;
    onFocus?: () => void;
    onSendPress?: () => void;
    secondaryIconOnPress?: () => void;
}
interface IState {
}
declare class InputBar extends React.Component<IInputBarProps, IState> {
    renderBarIconContainer: () => JSX.Element;
    render(): JSX.Element;
}
export default InputBar;

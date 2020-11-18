import { ViewStyle, ImageStyle, TextStyle } from "react-native";
interface Style {
    iconContainer: ViewStyle;
    barIconContainer: ViewStyle;
    iconImageStyle: ImageStyle;
}
export declare const _container: (height: number, width: number, minHeight: number, maxHeight: number, borderRadius: number, shadowColor: string, backgroundColor: string) => ViewStyle;
export declare const _textInputStyle: (height: number, width: number, minHeight: number, color: string, multiline: boolean) => TextStyle;
declare const _default: Style;
export default _default;

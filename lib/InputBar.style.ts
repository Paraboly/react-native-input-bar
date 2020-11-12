import { ViewStyle, ImageStyle, TextStyle, StyleSheet } from "react-native";

interface Style {
  iconContainer: ViewStyle;
  barIconContainer: ViewStyle;
  iconImageStyle: ImageStyle;
}

export const _container = (height: number, width: number, minHeight:number, maxHeight: number, borderRadius: number, shadowColor: string, backgroundColor: string): ViewStyle => ({
  width,
  height,
  minHeight,
  maxHeight,
  shadowColor,
  borderRadius,
  backgroundColor,
  bottom: 32,
  position:"absolute",
  alignSelf: "center",
  alignItems: "center",
  flexDirection: "row",
  shadowRadius: 3,
  shadowOpacity: 0.3,
  shadowOffset: {
    width: 0,
    height: 1
  }
});

export const _textInputStyle = (
  height: number,
  width: number,
  minHeight: number,
  color: string,
  multiline: boolean,
): TextStyle => ({
  color,
  height,
  minHeight,
  fontSize: 16,
  marginLeft: 12,
  fontWeight: "bold",
  width: width * 0.75,
  paddingTop: multiline ? 15 : undefined,
  paddingBottom: multiline ? 15 : undefined,
});

export default StyleSheet.create<Style>({
  iconContainer: {
    marginRight: 12,
  },
  barIconContainer:{
    right: 8,
    position: "absolute",
    flexDirection: "row",
    justifyContent: 'space-evenly',
  },
  iconImageStyle: {
    width: 20,
    height: 20,
  }
});

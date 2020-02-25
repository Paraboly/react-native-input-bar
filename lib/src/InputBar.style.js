import { Dimensions } from "react-native";
const { width: ScreenWidth } = Dimensions.get("window");

export const _barIconContainer = disableSecondaryIcon => ({
  flexDirection: "row",
  right: disableSecondaryIcon ? 8 : 16
});

export const _container = (shadowColor, marginBottom) => ({
  flex: 1,
  marginBottom,
  alignSelf: "center",
  justifyContent: "flex-end",
  shadowColor,
  shadowRadius: 3,
  shadowOpacity: 0.3,
  shadowOffset: {
    width: 0,
    height: 1
  }
});

export const _containerGlue = (
  height,
  width,
  minHeight,
  maxHeight,
  backgroundColor
) => ({
  width,
  height,
  minHeight,
  maxHeight,
  backgroundColor,
  paddingLeft: 16,
  paddingRight: 32,
  borderRadius: 12,
  alignItems: "center",
  flexDirection: "row"
});

export const _textInputStyle = color => ({
  color,
  fontSize: 16,
  width: "95%",
  marginRight: 8,
  fontWeight: "bold"
});

export default {
  secondaryBarIconContainer: {
    right: 12
  }
};

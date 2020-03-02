export const _barIconContainer = () => ({
  top: -8,
  right: 20,
  position: "absolute",
  flexDirection: "row"
});

export const _container = shadowColor => ({
  shadowColor,
  flexDirection: "row",
  shadowRadius: 3,
  shadowOpacity: 0.3,
  shadowOffset: {
    width: 0,
    height: 1
  }
});

export const _textInputStyle = (
  height,
  width,
  minHeight,
  maxHeight,
  color,
  multiline,
  backgroundColor
) => ({
  color,
  width,
  height,
  minHeight,
  maxHeight,
  fontSize: 16,
  marginRight: 8,
  paddingLeft: 16,
  backgroundColor,
  borderRadius: 12,
  fontWeight: "bold",
  paddingTop: multiline ? 15 : null
});

export default {
  secondaryBarIconContainer: {
    right: 12
  }
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._textInputStyle = exports._container = void 0;
const react_native_1 = require("react-native");
exports._container = (height, width, minHeight, maxHeight, borderRadius, shadowColor, backgroundColor) => ({
    width,
    height,
    minHeight,
    maxHeight,
    shadowColor,
    borderRadius,
    backgroundColor,
    bottom: 32,
    position: "absolute",
    alignSelf: "center",
    alignItems: "center",
    flexDirection: "row",
    shadowRadius: 3,
    shadowOpacity: 0.3,
    shadowOffset: {
        width: 0,
        height: 1,
    },
});
exports._textInputStyle = (height, width, minHeight, color, multiline) => ({
    color,
    height,
    minHeight,
    fontSize: 16,
    marginLeft: 12,
    fontWeight: "bold",
    width: width * 0.75,
    paddingTop: 15,
    paddingBottom: multiline ? 15 : undefined,
});
exports.default = react_native_1.StyleSheet.create({
    iconContainer: {
        marginRight: 12,
    },
    barIconContainer: {
        right: 8,
        position: "absolute",
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    iconImageStyle: {
        width: 20,
        height: 20,
    },
});
//# sourceMappingURL=InputBar.style.js.map
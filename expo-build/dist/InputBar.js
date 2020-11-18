"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const react_native_1 = require("react-native");
const react_native_animated_spinkit_1 = require("react-native-animated-spinkit");
const react_native_bounceable_1 = tslib_1.__importDefault(require("@freakycoder/react-native-bounceable"));
/**
 * ? Local Imports
 */
const InputBar_style_1 = tslib_1.__importStar(require("./InputBar.style"));
const { width: ScreenWidth } = react_native_1.Dimensions.get("window");
class InputBar extends React.Component {
    constructor() {
        super(...arguments);
        this.renderBarIconContainer = () => {
            const { onSendPress, SpinnerType = react_native_animated_spinkit_1.Circle, spinnerSize = 20, spinnerColor, disableSendIcon, secondaryIconOnPress, disableSecondaryIcon, ImageComponent = react_native_1.Image, spinnerVisibility = false, sendIconImageSource = require("./local-assets/send.png"), secondaryIconImageSource = require("./local-assets/attachment.png"), } = this.props;
            const renderSpinner = () => {
                return (<react_native_1.View>
          <SpinnerType size={spinnerSize} color={spinnerColor}/>
        </react_native_1.View>);
            };
            const renderSendButton = () => !disableSendIcon && (<react_native_bounceable_1.default {...this.props} style={InputBar_style_1.default.iconContainer} onPress={onSendPress}>
          <ImageComponent source={sendIconImageSource} style={InputBar_style_1.default.iconImageStyle}/>
        </react_native_bounceable_1.default>);
            return (<react_native_1.View style={InputBar_style_1.default.barIconContainer}>
        {!disableSecondaryIcon && (<react_native_bounceable_1.default {...this.props} style={InputBar_style_1.default.iconContainer} onPress={secondaryIconOnPress}>
            <ImageComponent style={InputBar_style_1.default.iconImageStyle} source={secondaryIconImageSource}/>
          </react_native_bounceable_1.default>)}
        {spinnerVisibility ? renderSpinner() : renderSendButton()}
      </react_native_1.View>);
        };
    }
    render() {
        const { value, style, onChangeText, textInputStyle, height = 50, minHeight = 50, maxHeight = 150, borderRadius = 12, multiline = false, textColor = "#9da1ab", shadowColor = "#757575", backgroundColor = "#fff", width = ScreenWidth * 0.9, placeholder = "Type a message...", } = this.props;
        return (<react_native_1.View style={[
            InputBar_style_1._container(height, width, minHeight, maxHeight, borderRadius, shadowColor, backgroundColor),
            style,
        ]}>
        <react_native_1.TextInput {...this.props} value={value} multiline placeholder={placeholder} onChangeText={onChangeText} style={textInputStyle ||
            InputBar_style_1._textInputStyle(height, width, minHeight, textColor, multiline)}/>
        {this.renderBarIconContainer()}
      </react_native_1.View>);
    }
}
exports.default = InputBar;
//# sourceMappingURL=InputBar.js.map
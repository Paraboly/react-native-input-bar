import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Dimensions, TextInput } from "react-native";
import Androw from "react-native-androw";
import Spinner from "react-native-spinkit";
import styles, {
  _container,
  _containerGlue,
  _textInputStyle,
  _barIconContainer
} from "./InputBar.style";
import BarIcon from "./components/BarIcon";

const { width: ScreenWidth } = Dimensions.get("window");

class InputBar extends Component {
  renderBarIconContainer = () => {
    const {
      spinnerType,
      spinnerSize,
      spinnerColor,
      spinnerStyle,
      primaryIconName,
      primaryIconType,
      primaryIconSize,
      primaryIconColor,
      secondaryIconName,
      secondaryIconType,
      secondaryIconSize,
      spinnerVisibility,
      primaryIconOnPress,
      secondaryIconColor,
      disablePrimaryIcon,
      disableSecondaryIcon,
      secondaryIconOnPress
    } = this.props;

    return (
      <View style={_barIconContainer(disableSecondaryIcon)}>
        {!disableSecondaryIcon && (
          <View style={styles.secondaryBarIconContainer}>
            <BarIcon
              name={secondaryIconName}
              type={secondaryIconType}
              size={secondaryIconSize}
              color={secondaryIconColor}
              onPress={secondaryIconOnPress}
            />
          </View>
        )}
        {spinnerVisibility ? (
          <Spinner
            type={spinnerType}
            size={spinnerSize}
            color={spinnerColor}
            style={spinnerStyle}
            {...this.props}
          />
        ) : (
          !disablePrimaryIcon && (
            <BarIcon
              name={primaryIconName}
              type={primaryIconType}
              color={primaryIconColor}
              size={primaryIconSize}
              onPress={primaryIconOnPress}
            />
          )
        )}
      </View>
    );
  };

  render() {
    const {
      width,
      value,
      bottom,
      height,
      minHeight,
      maxHeight,
      textColor,
      multiline,
      shadowColor,
      placeholder,
      onChangeText,
      textInputStyle,
      backgroundColor
    } = this.props;

    return (
      <Androw style={_container(shadowColor, bottom)}>
        <TextInput
          value={value}
          multiline={multiline}
          placeholder={placeholder}
          onChangeText={onChangeText}
          style={
            textInputStyle ||
            _textInputStyle(
              width,
              height,
              minHeight,
              maxHeight,
              textColor,
              multiline,
              backgroundColor
            )
          }
          {...this.props}
        />
        {this.renderBarIconContainer()}
      </Androw>
    );
  }
}

InputBar.propTypes = {
  multiline: PropTypes.bool,
  textColor: PropTypes.string,
  shadowColor: PropTypes.string,
  placeholder: PropTypes.string,
  spinnerType: PropTypes.string,
  spinnerSize: PropTypes.number,
  spinnerColor: PropTypes.string,
  spinnerVisibility: PropTypes.bool,
  primaryIconSize: PropTypes.number,
  primaryIconName: PropTypes.string,
  primaryIconType: PropTypes.string,
  primaryIconColor: PropTypes.string,
  secondaryIconSize: PropTypes.number,
  secondaryIconName: PropTypes.string,
  secondaryIconType: PropTypes.string,
  secondaryIconColor: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  bottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  minHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

InputBar.defaultProps = {
  bottom: 24,
  height: 50,
  minHeight: 50,
  spinnerSize: 20,
  maxHeight: null,
  multiline: false,
  primaryIconSize: 21,
  textColor: "#9da1ab",
  secondaryIconSize: 21,
  shadowColor: "#757575",
  spinnerColor: "#9da1ab",
  width: ScreenWidth * 0.9,
  spinnerVisibility: false,
  primaryIconName: "send-o",
  disablePrimaryIcon: false,
  backgroundColor: "#fdfdfd",
  primaryIconColor: "#9da1ab",
  secondaryIconType: "Entypo",
  disableSecondaryIcon: false,
  secondaryIconColor: "#9da1ab",
  spinnerType: "FadingCircleAlt",
  primaryIconType: "FontAwesome",
  secondaryIconName: "attachment",
  placeholder: "Type a message..."
};

export default InputBar;

import React from "react";
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

const InputBar = props => {
  const {
    width,
    value,
    bottom,
    height,
    textColor,
    shadowColor,
    placeholder,
    onChangeText,
    textInputStyle,
    primaryIconName,
    primaryIconType,
    primaryIconSize,
    backgroundColor,
    primaryIconColor,
    spinnerVisibility,
    secondaryIconName,
    spinnerType,
    spinnerSize,
    spinnerColor,
    spinnerStyle,
    secondaryIconType,
    secondaryIconSize,
    primaryIconOnPress,
    secondaryIconColor,
    disablePrimaryIcon,
    disableSecondaryIcon,
    secondaryIconOnPress
  } = props;

  renderBarIconContainer = () => (
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
          {...props}
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

  return (
    <Androw style={_container(shadowColor, bottom)}>
      <View style={_containerGlue(height, width, backgroundColor)}>
        <TextInput
          value={value}
          placeholder={placeholder}
          onChangeText={onChangeText}
          style={textInputStyle || _textInputStyle(textColor)}
        />
        {renderBarIconContainer()}
      </View>
    </Androw>
  );
};

InputBar.propTypes = {
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
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

InputBar.defaultProps = {
  bottom: 24,
  height: 50,
  spinnerSize: 20,
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

import React from "react";
import PropTypes from "prop-types";
import { View, Dimensions, TextInput } from "react-native";
import Androw from "react-native-androw";
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
    bottom,
    height,
    textColor,
    shadowColor,
    placeholder,
    textInputStyle,
    primaryIconName,
    primaryIconType,
    primaryIconSize,
    backgroundColor,
    primaryIconColor,
    secondaryIconName,
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
      {!disablePrimaryIcon && (
        <BarIcon
          name={primaryIconName}
          type={primaryIconType}
          color={primaryIconColor}
          size={primaryIconSize}
          onPress={primaryIconOnPress}
        />
      )}
    </View>
  );

  return (
    <Androw style={_container(shadowColor, bottom)}>
      <View style={_containerGlue(height, width, backgroundColor)}>
        <TextInput
          placeholder={placeholder}
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
  primaryIconSize: 21,
  textColor: "#9da1ab",
  secondaryIconSize: 21,
  shadowColor: "#757575",
  width: ScreenWidth * 0.9,
  primaryIconName: "send-o",
  disablePrimaryIcon: false,
  backgroundColor: "#fdfdfd",
  primaryIconColor: "#9da1ab",
  secondaryIconType: "Entypo",
  disableSecondaryIcon: false,
  secondaryIconColor: "#9da1ab",
  primaryIconType: "FontAwesome",
  secondaryIconName: "attachment",
  placeholder: "Type a message..."
};

export default InputBar;

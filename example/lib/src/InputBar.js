import React from "react";
import PropTypes from "prop-types";
import { View, Dimensions, TextInput } from "react-native";
import Androw from "react-native-androw";
import styles from "./InputBar.style";
import BarIcon from "./components/BarIcon";

const { width: ScreenWidth } = Dimensions.get("window");

const InputBar = props => {
  const {
    primaryIconName,
    primaryIconType,
    primaryIconColor,
    primaryIconSize,
    secondaryIconName,
    secondaryIconType,
    secondaryIconColor,
    secondaryIconSize,
    primaryIconOnPress,
    disableSecondaryIcon,
    secondaryIconOnPress
  } = props;

  renderBarIconContainer = () => (
    <View
      style={{
        flexDirection: "row",
        right: disableSecondaryIcon ? 8 : 16
      }}
    >
      {!disableSecondaryIcon && (
        <View style={{ right: 12 }}>
          <BarIcon
            name={secondaryIconName}
            type={secondaryIconType}
            size={secondaryIconSize}
            color={secondaryIconColor}
            onPress={secondaryIconOnPress}
          />
        </View>
      )}
      <BarIcon
        name={primaryIconName}
        type={primaryIconType}
        color={primaryIconColor}
        size={primaryIconSize}
        onPress={primaryIconOnPress}
      />
    </View>
  );

  return (
    <Androw
      style={{
        flex: 1,
        justifyContent: "flex-end",
        marginBottom: 24,
        alignSelf: "center",
        shadowRadius: 3,
        shadowOpacity: 0.3,
        shadowColor: "#757575",
        shadowOffset: {
          width: 0,
          height: 1
        }
      }}
    >
      <View
        style={{
          height: 50,
          paddingLeft: 16,
          paddingRight: 32,
          borderRadius: 12,
          alignItems: "center",
          flexDirection: "row",
          width: ScreenWidth * 0.9,
          backgroundColor: "#fdfdfd"
        }}
      >
        <TextInput
          placeholder="Type a message..."
          style={{
            fontSize: 16,
            width: "95%",
            marginRight: 8,
            color: "#9da1ab",
            fontWeight: "bold"
          }}
        />
        {renderBarIconContainer()}
      </View>
    </Androw>
  );
};

InputBar.propTypes = {
  primaryIconName: PropTypes.string,
  primaryIconType: PropTypes.string,
  primaryIconColor: PropTypes.string,
  primaryIconSize: PropTypes.number,
  secondaryIconName: PropTypes.string,
  secondaryIconType: PropTypes.string,
  secondaryIconColor: PropTypes.string,
  secondaryIconSize: PropTypes.number
};

InputBar.defaultProps = {
  primaryIconName: "send-o",
  primaryIconType: "FontAwesome",
  primaryIconColor: "#9da1ab",
  primaryIconSize: 21,
  secondaryIconName: "attachment",
  secondaryIconType: "Entypo",
  secondaryIconColor: "#9da1ab",
  secondaryIconSize: 21
};

export default InputBar;

import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-dynamic-vector-icons";
import styles from "./BarIcon.style";

const BarIcon = props => {
  const { onPress, containerStyle } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      hitSlop={styles.hitSlop}
      style={containerStyle || styles.container}
    >
      <Icon
        name="send"
        type="MaterialIcons"
        color="#9da1ab"
        size={20}
        {...props}
      />
    </TouchableOpacity>
  );
};

export default BarIcon;

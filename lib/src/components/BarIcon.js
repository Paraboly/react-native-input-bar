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
        size={20}
        name="send"
        color="#9da1ab"
        type="MaterialIcons"
        {...props}
      />
    </TouchableOpacity>
  );
};

export default BarIcon;

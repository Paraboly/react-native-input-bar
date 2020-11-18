import * as React from "react";
import {
  View,
  Image,
  Dimensions,
  StyleProp,
  ViewStyle,
  TextInput,
  TextInputProps,
  TextInputAndroidProps,
} from "react-native";
import { Circle } from "react-native-animated-spinkit";
import RNBounceable from "@freakycoder/react-native-bounceable";
/**
 * ? Local Imports
 */
import styles, { _container, _textInputStyle } from "./InputBar.style";

const { width: ScreenWidth } = Dimensions.get("window");

export type CustomStyleProp =
  | StyleProp<ViewStyle>
  | Array<StyleProp<ViewStyle>>;

export interface ISource {
  source: string | { uri: string };
}

export interface IInputBarProps extends TextInputProps, TextInputAndroidProps {
  style?: CustomStyleProp;
  width?: number;
  height?: number | null;
  value?: string;
  borderRadius?: number;
  minHeight?: number;
  maxHeight?: number;
  textColor?: string;
  multiline?: boolean;
  shadowColor?: string;
  placeholder?: string;
  sendIconImageSource?: ISource;
  secondaryIconImageSource?: ISource;
  onChangeText?: (text: string) => void;
  textInputStyle?: any;
  backgroundColor?: string;
  ImageComponent?: any;
  SpinnerType?: any;
  spinnerSize?: number;
  spinnerColor?: string;
  spinnerVisibility?: boolean;
  disableSendIcon?: boolean;
  disableSecondaryIcon?: boolean;
  onBlur?: () => void;
  onFocus?: () => void;
  onSendPress?: () => void;
  secondaryIconOnPress?: () => void;
}

interface IState {}

class InputBar extends React.Component<IInputBarProps, IState> {
  renderBarIconContainer = () => {
    const {
      onSendPress,
      SpinnerType = Circle,
      spinnerSize = 20,
      spinnerColor,
      disableSendIcon,
      secondaryIconOnPress,
      disableSecondaryIcon,
      ImageComponent = Image,
      spinnerVisibility = false,
      sendIconImageSource = require("./local-assets/send.png"),
      secondaryIconImageSource = require("./local-assets/attachment.png"),
    } = this.props;

    const renderSpinner = () => {
      return (
        <View>
          <SpinnerType size={spinnerSize} color={spinnerColor} />
        </View>
      );
    };

    const renderSendButton = () =>
      !disableSendIcon && (
        <RNBounceable
          {...this.props}
          style={styles.iconContainer}
          onPress={onSendPress}
        >
          <ImageComponent
            source={sendIconImageSource}
            style={styles.iconImageStyle}
          />
        </RNBounceable>
      );

    return (
      <View style={styles.barIconContainer}>
        {!disableSecondaryIcon && (
          <RNBounceable
            {...this.props}
            style={styles.iconContainer}
            onPress={secondaryIconOnPress}
          >
            <ImageComponent
              style={styles.iconImageStyle}
              source={secondaryIconImageSource}
            />
          </RNBounceable>
        )}
        {spinnerVisibility ? renderSpinner() : renderSendButton()}
      </View>
    );
  };

  render() {
    const {
      value,
      style,
      onChangeText,
      textInputStyle,
      height = 50,
      minHeight = 50,
      maxHeight = 150,
      borderRadius = 12,
      multiline = false,
      textColor = "#9da1ab",
      shadowColor = "#757575",
      backgroundColor = "#fff",
      width = ScreenWidth * 0.9,
      placeholder = "Type a message...",
    } = this.props;

    return (
      <View
        style={[
          _container(
            height,
            width,
            minHeight,
            maxHeight,
            borderRadius,
            shadowColor,
            backgroundColor,
          ),
          style,
        ]}
      >
        <TextInput
          {...this.props}
          value={value}
          multiline
          placeholder={placeholder}
          onChangeText={onChangeText}
          style={
            textInputStyle ||
            _textInputStyle(height, width, minHeight, textColor, multiline)
          }
        />
        {this.renderBarIconContainer()}
      </View>
    );
  }
}

export default InputBar;

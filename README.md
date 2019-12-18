<img alt="React Native Input Bar" src="assets/logo.png" width="1050"/>

[![Battle Tested ✅](https://img.shields.io/badge/-Battle--Tested%20%E2%9C%85-03666e?style=for-the-badge)](https://github.com/Paraboly/@paraboly/react-native-input-bar)

[![Fully customizable, beautifully designed Input Bar for React Native](https://img.shields.io/badge/-Fully%20customizable%2C%20beautifully%20designed%20Input%20Bar%20for%20React%20Native-lightgrey?style=for-the-badge)](https://github.com/Paraboly/@paraboly/react-native-input-bar)

[![npm version](https://img.shields.io/npm/v/@paraboly/react-native-input-bar.svg?style=for-the-badge)](https://www.npmjs.com/package/@paraboly/react-native-input-bar)
[![npm](https://img.shields.io/npm/dt/@paraboly/react-native-input-bar.svg?style=for-the-badge)](https://www.npmjs.com/package/@paraboly/react-native-input-bar)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

<p align="center">
<img alt="React Native Input Bar"
        src="assets/Screenshots/example.png" width="49%" />
<img alt="React Native Input Bar"
        src="assets/Screenshots/example.gif" width="49%"  />
</p>

# Installation

Add the dependency:

```ruby
npm i @paraboly/react-native-input-bar
```

## Peer Dependencies

###### IMPORTANT! You need install them

```js
"react": ">= 16.x.x",
"react-native": ">= 0.55.x",
"react-native-androw": ">= 0.0.34",
"react-native-vector-icons": ">= 6.6.0",
"react-native-dynamic-vector-icons": ">= 0.2.1"
```

# Usage

### InputBar should stay at the bottom therefore, please do not forget to set `flex: 1` on your main container. Example is available for the real usage.

## Import

```js
import InputBar from "@paraboly/react-native-input-bar";
```

## Usage

```js
<InputBar />
```

# Configuration - Props

| Property             |     Type      |       Default       | Description                                        |
| -------------------- | :-----------: | :-----------------: | -------------------------------------------------- |
| width                | string/number | 90% of screen width | change the InputBar's width                        |
| height               | string/number |         50          | change the InputBar's height                       |
| bottom               | string/number |         24          | change the InputBar's bottom position              |
| onChangeText         |   function    |      undefined      | handle onChangeText function                       |
| backgroundColor      |     color     |       #fdfdfd       | set your own color for InputBar's background color |
| textColor            |     color     |       #9da1ab       | set your own color for TextInput's text color      |
| shadowColor          |     color     |       #757575       | set your own color for TextInput's shadow color    |
| placeholder          |    string     |  Type a message...  | change the TextInput's placeholder                 |
| textInputStyle       |     style     |       default       | set your own style for TextInput                   |
| disablePrimaryIcon   |    boolean    |        false        | disable the primary icon                           |
| disableSecondaryIcon |    boolean    |        false        | disable the secondary icon                         |
| primaryIconName      |    string     |        send         | change the primary icon's name                     |
| primaryIconType      |    string     |     FontAwesome     | change the primary icon's type                     |
| primaryIconColor     |    string     |       #9da1ab       | change the primary icon's color                    |
| primaryIconSize      |    number     |         21          | change the primary icon's size                     |
| primaryIconOnPress   |   function    |      undefined      | set a function when primary icon is on pressed     |
| secondaryIconName    |    string     |     attachment      | change the secondary icon's name                   |
| secondaryIconType    |    string     |       Entypo        | change the secondary icon's type                   |
| secondaryIconColor   |    string     |       #9da1ab       | change the secondary icon's color                  |
| secondaryIconSize    |    number     |         21          | change the secondary icon's size                   |
| secondaryIconOnPress |   function    |      undefined      | set a function when secondary icon is on pressed   |

## Roadmap

- [x] ~~LICENSE~~
- [ ] Better Example

## Credits

Thanks to [Mayurksgr](https://www.instagram.com/mayurksgr/) for this awesome inspiration. [Credit Design Inpsiration](https://www.instagram.com/p/BgOxB9SlLkM/)

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Input Bar is available under the MIT license. See the LICENSE file for more info.

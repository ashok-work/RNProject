import { AppRegistry } from 'react-native';
import App from './App';
// import { name } from './app.json';

import FontAwesome from 'react-native-vector-icons/Fonts/FontAwesome.ttf';
import MaterialCommunityIcons from 'react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf';
import Ionicons from 'react-native-vector-icons/Fonts/Ionicons.ttf';
import AntDesign from 'react-native-vector-icons/Fonts/AntDesign.ttf';
import MaterialIcons from 'react-native-vector-icons/Fonts/MaterialIcons.ttf';

const iconFontStyles = `@font-face {
  src: url(${FontAwesome});
  font-family: FontAwesome;
}@font-face {
    src: url(${Ionicons});
    font-family: Ionicons;
}@font-face {
    src: url(${AntDesign});
    font-family: AntDesign;
}@font-face {
    src: url(${MaterialCommunityIcons});
    font-family: MaterialCommunityIcons;
}@font-face {
    src: url(${MaterialIcons});
    font-family: MaterialIcons;
}`;
// Create stylesheet
const style = document.createElement('style');
if (style.styleSheet) {
    style.styleSheet.cssText = iconFontStyles;
} else {
    style.appendChild(document.createTextNode(iconFontStyles));
}

// Inject stylesheet
document.head.appendChild(style);

AppRegistry.registerComponent('RNProject', () => App);
AppRegistry.runApplication('RNProject', {
  initialProps: {},
  rootTag: document.getElementById('root'),
});

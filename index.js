// organize-imports-ignore
import 'react-native-gesture-handler';

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import Animated from 'react-native-reanimated';

// https://github.com/software-mansion/react-native-reanimated/issues/1794#issuecomment-898393331
Animated.addWhitelistedNativeProps({});

AppRegistry.registerComponent(appName, () => App);

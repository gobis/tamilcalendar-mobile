/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import Homescreen from './src/screens/homescreen';
import DailyCalendar from './src/screens/dailycalendar';


// AppRegistry.registerComponent(appName, () => App);

AppRegistry.registerComponent(appName, () => DailyCalendar);

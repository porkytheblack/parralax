/**
 * In order to use environment variables in Expo Go, you must use the dotenv package.
 */
// import * as dotenv from "dotenv"
// dotenv.config()

import { registerRootComponent } from 'expo';

import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);

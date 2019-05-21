import { Navigation } from 'react-native-navigation';


import AuthScreen from './src/screens/Auth/Auth';

//Register Screens
Navigation.registerComponent("app-ui.AuthScreen", () => AuthScreen);

//Start a app
Navigation.startSingleScreenApp({
  screen: {
    screen: "app-ui.AuthScreen",
    title: "Login"
  }
});
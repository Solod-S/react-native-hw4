import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home";
import { MaterialIcons } from "@expo/vector-icons";
import { Button, TouchableOpacity, Image } from "react-native";

import screens from "./screens";
const {
  LoginScreen,
  RegistrationScreen,
  CreateScreen,
  PostsScreen,
  ProfileScreen,
} = screens;

const backIcon = require("./assets/icon/arrow-left.png");

const GeneralStack = createStackNavigator();
// const MainStack = createStackNavigator();

const useRoute = () => {
  return (
    <>
      <GeneralStack.Navigator initialRouteName="Auth">
        <GeneralStack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <GeneralStack.Screen
          options={{ headerShown: false }}
          name="Registration"
          component={RegistrationScreen}
        />
        <GeneralStack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        ></GeneralStack.Screen>
      </GeneralStack.Navigator>
      {/* <MainStack.Navigator initialRouteName="Home">
        <MainStack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        ></MainStack.Screen>
      </MainStack.Navigator> */}
    </>
  );
};

export default useRoute;

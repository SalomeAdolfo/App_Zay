import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";

const LoginStackScreen = () => {
  const LoginStack = createNativeStackNavigator();
  return (
    <LoginStack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <LoginStack.Screen name="LoginScreen" component={LoginScreen} />
    </LoginStack.Navigator>
  );
};

export default LoginStackScreen;
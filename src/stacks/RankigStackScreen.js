import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RankingScreen from "../screens/RankingScreen";

const RankigStackScreen = () => {
  const SettingsStack = createNativeStackNavigator();
  return (
    <SettingsStack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <SettingsStack.Screen name="RankingScreen" component={RankingScreen} />
    </SettingsStack.Navigator>
  );
};

export default RankigStackScreen;
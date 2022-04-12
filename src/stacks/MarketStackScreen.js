import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MarketScreen from "../screens/MarketScreen";

const MarketStackScreen = () => {
  const MarketStack = createNativeStackNavigator();
  return (
    <MarketStack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <MarketStack.Screen name="Market" component={MarketScreen} />
    </MarketStack.Navigator>
  );
};

export default MarketStackScreen;
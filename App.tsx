import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { globalStyles } from "./styles/globalStyles";
// import { Ionicons } from "@expo/vector-icons";

import Main from "./screens/main";
import Countries from "./components/api";
import CountryDetails from "./screens/countryDetails";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={Main}
            options={{
              title: "Where in the World?",
            }}
          />
          <Stack.Screen
            name="CountryDetails"
            component={CountryDetails}
            options={{
              presentation: "card",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import LoginScreen from "./loginScreen";
import Countries from "../components/countryComponent";
import { globalStyles } from "../styles/globalStyles";

export default function Main() {
  return (
    <ScrollView style={[globalStyles.container, styles.container]}>
      <StatusBar style="auto" />
      {/* <LoginScreen /> */}
      <Countries />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {},
});

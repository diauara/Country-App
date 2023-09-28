import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { globalStyles } from "../styles/globalStyles";

export default function LoginScreen() {
  return (
    <View style={globalStyles.loginScreen}>
      <StatusBar style="auto" />
      <Text>Login</Text>
    </View>
  );
}

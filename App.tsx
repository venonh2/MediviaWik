import { StatusBar } from "expo-status-bar";
import React from "react";
import ErrorBoundary from "react-native-error-boundary";
import {
  useFonts,
  Poppins_700Bold,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";

import { Navigation } from "./src/routes";
import { View } from "react-native";

const errorHandler = (error: Error, stackTrace: string) => {
  console.log(error, stackTrace);
};

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return <View />;
  }

  return (
    <ErrorBoundary onError={errorHandler}>
      <StatusBar style="auto" />
      <Navigation />
    </ErrorBoundary>
  );
}

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
import { CustomFallback } from "./src/components/CustomFallback";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const errorHandler = (error: Error, stackTrace: string) => {
  // [] sentry
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
    <ErrorBoundary FallbackComponent={CustomFallback} onError={errorHandler}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar style="dark" />
        <Navigation />
      </GestureHandlerRootView>
    </ErrorBoundary>
  );
}

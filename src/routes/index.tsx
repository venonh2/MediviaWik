import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/Home";
import { VocationScreen } from "../screens/Vocations";
import { CityScreen } from "../screens/City";

const Stack = createNativeStackNavigator();

export function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            navigationBarColor: "#ffffff",
          }}
        />
        <Stack.Screen
          name="VocationScreen"
          component={VocationScreen}
          options={{
            headerShown: false,
            presentation: "modal",
            animation: "simple_push",
            navigationBarColor: "#000000",
          }}
        />
        <Stack.Screen
          name="CityScreen"
          component={CityScreen}
          options={{
            headerShown: false,
            presentation: "modal",
            animation: "simple_push",
            navigationBarColor: "#000000",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

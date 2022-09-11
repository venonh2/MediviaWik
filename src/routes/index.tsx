import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/Home";
import { VocationScreen } from "../screens/Vocations";
import { CityScreen } from "../screens/City";
import { CitiesScreen } from "../screens/Cities";
import { Header } from "../components/Header";
import { WeaponsScreen } from "../screens/Weapons";
import { MonstersScreen } from "../screens/Monsters";

const Stack = createNativeStackNavigator();

export function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            orientation: "portrait",
            navigationBarColor: "#ffffff",
            header: () => <Header />,
          }}
        />
        <Stack.Screen
          name="VocationScreen"
          component={VocationScreen}
          options={{
            orientation: "portrait",
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
            orientation: "portrait",
            presentation: "modal",
            animation: "simple_push",
          }}
        />
        <Stack.Screen
          name="CitiesScreen"
          component={CitiesScreen}
          options={{
            orientation: "portrait",
            presentation: "modal",
            animation: "simple_push",
            header: () => <Header />,
          }}
        />
        <Stack.Screen
          name="WeaponsScreen"
          component={WeaponsScreen}
          options={{
            headerShown: false,
            orientation: "portrait",
            presentation: "modal",
            animation: "simple_push",
          }}
        />
        <Stack.Screen
          name="MonstersScreen"
          component={MonstersScreen}
          options={{
            headerShown: false,
            orientation: "portrait",
            presentation: "modal",
            animation: "simple_push",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

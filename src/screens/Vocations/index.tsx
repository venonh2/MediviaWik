import { useEffect } from "react";
import { ImageBackground, Text } from "react-native";

import image from "../../assets/as.png";

export function VocationScreen() {
  useEffect(() => {
    console.log("fetch vocation details");
  }, []);

  return (
    <ImageBackground source={image} className="flex-1">
      <Text>sasaas</Text>
    </ImageBackground>
  );
}

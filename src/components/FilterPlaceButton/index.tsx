import { Text, TouchableOpacity } from "react-native";
import { Gradient } from "../Gradient";

type Props = {
  pressed: boolean;
  onPress: () => void;
  title: string;
};

export function FilterPlaceButton({ pressed, title, onPress }: Props) {
  return (
    <Gradient>
      <TouchableOpacity className="bg-white p-1 rounded opacity-80">
        <Text className="font-semibold">{title}</Text>
      </TouchableOpacity>
    </Gradient>
  );
}

import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  pressed: boolean;
  title: string;
};

export function FilterPlaceButton({ pressed, title, ...rest }: Props) {
  return (
    <TouchableOpacity
      {...rest}
      testID="filter-place-button-id"
      className={`bg-white p-2 ${pressed && "border-b-[1px] border-gray-900"}`}
    >
      <Text className={`font-bold text-[16px] ${!pressed && "opacity-40"}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

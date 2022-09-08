import { TouchableOpacity, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  children: React.ReactNode;
};

export function RoundedIcon({ children, ...rest }: Props) {
  return (
    <TouchableOpacity
      {...rest}
      className={`rounded-full p-1 border-2 ${rest.className}`}
    >
      {children}
    </TouchableOpacity>
  );
}

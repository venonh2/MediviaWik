import { Text, TextProps } from "react-native";

type Props = TextProps & {
  text: string;
  /**
   * @example: string has 30 caracters, so cutAt: 20 would return 20 caracteres
   */
  cutTextAt: number;
  /**
   * @example: concat three dots at the end of the string like: mystring...
   */
  dots?: boolean;
};

/**
 *
 * @returns a text component
 */
export function TextFormatter({
  text,
  cutTextAt,
  dots = false,
  ...rest
}: Props) {
  return (
    <Text {...rest} className={`${rest.className}`}>
      {text.slice(0, cutTextAt)} {dots && "..."}
    </Text>
  );
}

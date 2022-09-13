import { ViewProps } from "react-native";

import { MotiView } from "moti";

type Props = ViewProps & {
  /**
   * @example delay in MS, default: 600
   */
  delay: number;
};

export function OpacityEffectView({ delay = 600, children, ...rest }: Props) {
  if (delay <= 0) return null;

  if (!children) return null;

  return (
    <MotiView
      className="w-full bg-white"
      {...rest}
      from={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        type: "timing",
        duration: delay ?? 600,
      }}
    >
      {children}
    </MotiView>
  );
}

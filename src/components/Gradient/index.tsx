import { LinearGradient } from "expo-linear-gradient";

const GRADIENTS = [
  ["#EB0C0C", "#12B0D2"],
  ["#000000", "#0F0C53"],
  ["#AAAA00", "#000000"],
  ["#0E4F22", "#56E582"],
  ["#000428", "#004e92"],
  ["#2C3E50", "#4CA1AF"],
  ["#0B486B", "#F56217"],
  ["##2196f3", "#f44336"],
  ["#16BFFD", "#CB3066"],
  ["#1D4350", "#A43931"],
  ["#E0EAFC", "#CFDEF3"],
  ["#F1F2B5", "#135058"],
  ["#7b4397", "#dc2430"],
  ["#8e9eab", "#eef2f3"],
  ["#136a8a", "#267871"],
];

type Props = {
  children: React.ReactNode;
};

export function Gradient({ children }: Props) {
  const shouldHaveGradient = Math.floor(Math.random() * 46) % 2 === 0;

  return (
    <LinearGradient
      className="bg-white p-[2px] rounded"
      colors={
        shouldHaveGradient
          ? GRADIENTS[Math.floor(Math.random() * 15)]
          : ["#fafafa", "#fafafa"]
      }
    >
      {children}
    </LinearGradient>
  );
}

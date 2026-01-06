import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const sizes = {
  screen: {
    width,
    height,
  },
  text: {
    xs: 10,
    sm: 12,
    md: 14,
    lg: 16,
    xl: 20,
    "2xl": 24,
    "3xl": 32,
    "4xl": 40,
  },
  spacing: {
    xs: 10,
    sm: 12,
    md: 14,
    lg: 16,
    xl: 20,
    "2xl": 24,
    "3xl": 32,
    "4xl": 40,
  },
} as const

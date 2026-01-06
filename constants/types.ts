import { theme } from "./theme";

export type FontSize = keyof typeof theme.sizes.text
export type FontFamily = 'regular' | 'medium' | 'semibold' | 'bold' | 'extrabold'
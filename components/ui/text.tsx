import { Text, TextStyle } from "react-native";
import React from "react";
import { theme } from "@/constants/theme";
import { FontFamily, FontSize } from "@/constants/types";
// import { cn } from "@/lib/utils";

interface CustomTextProps {
  children: React.ReactNode;
  style?: TextStyle;
  fontSize?: FontSize;
  fontFamily?: FontFamily;
  color?: string;
//   className?: string;
}

const CustomText = ({
  style,
  children,
  fontSize = "md",
  fontFamily = "regular",
  color,
//   className
}: CustomTextProps) => {
  return (
    <Text
      style={{
        fontFamily,
        color,
        fontSize: theme.sizes.text[fontSize],
        ...style,
      }}
    //   className={cn('text-black',className)}
    >
      {children}
    </Text>
  );
};

export default CustomText;

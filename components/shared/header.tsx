import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { CustomText } from "../ui";
import { router } from "expo-router";

interface SharedHeaderProps {
  children?: React.ReactNode;
  className?: string;
}
const ArrowLeft = require("@/assets/images/arrow-left.png");
const SharedHeader = ({ children, className }: SharedHeaderProps) => {
  return (
    <View className={className}>
      <View>
        <Pressable
          className="flex flex-row items-center"
          onPress={() => router.back()}
        >
          <Image
            source={ArrowLeft}
            resizeMode="contain"
            className="h-10 w-9 mx-3 "
          />
          <Text className="text-lg">Back</Text>
        </Pressable>
      </View>
      {children}
    </View>
  );
};

export default SharedHeader;

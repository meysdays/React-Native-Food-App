import { View, Text, Image, Pressable } from "react-native";
import React from "react";

interface CategoryItemProps {
  name: string;
  imageUrl: string;
  id: string;
  selected: boolean;
  onPress: () => void;
}

const CategoryItem = ({
  name,
  imageUrl,
  id,
  selected,
  onPress,
}: CategoryItemProps) => {
  return (
    <Pressable onPress={onPress}>
      <View className="mr-4 items-center">
        <View className="w-28 h-28 rounded-full bg-pink-100 justify-center p-4 my-2">
          <Image
            source={{ uri: imageUrl }}
            className=" h-14 mb-1"
            resizeMode="contain"
          />
          <Text
            className="text-xs font-medium text-gray-900 text-center"
            numberOfLines={2}
          >
            {name}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default CategoryItem;

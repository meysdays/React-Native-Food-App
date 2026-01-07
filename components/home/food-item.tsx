import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { TabIcon } from "../ui";
import { FavoriteIcon } from "@/assets/icons";

interface FoodItemProps {
  name: string;
  img: string;
  id: string;
}
const FoodItem = ({ name, img, id }: FoodItemProps) => {
  return (
    <View className="m-3 ">
      <View className="border-2 p-0 flex flex-col justify-between  rounded-2xl border-gray-500 w-41 gap-3 h-56 ">
        <Image
          source={{ uri: img }}
          resizeMode="cover"
          className="w-40 h-28 rounded-2xl"
        />
        <Text numberOfLines={2} className="text-center">
          {name}
        </Text>

        <View >
          <View className="flex flex-row items-center justify-between mb-2">
            <View className="ml-2">
              <Pressable>
                <TabIcon className="" name="favorite" Icon={FavoriteIcon} />
              </Pressable>
            </View>
            <View className="mr-1">
              <Pressable>
                <View className="bg-gray-950 w-28 h-9 rounded-xl justify-center">
                  <Text className="text-amber-50 text-center text-sm">View Details</Text>
                </View>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
      {/* <Text>FoodItem</Text> */}
    </View>
  );
};

export default FoodItem;

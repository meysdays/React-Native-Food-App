import { FavoriteIcon } from "@/assets/icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { useFavFood } from "../providers/FavFoodContextProvider";
import { TabIcon } from "../ui";
import { router } from "expo-router";

interface FoodItemProps {
  name: string;
  img: string;
  id: string;
  category?: string;
}

const FoodItem = (food: FoodItemProps) => {
  const { updateFavFoods, favFoods, removeFavFoods } = useFavFood();

  const isFavFood = () => {
    const favFoodsId = favFoods.map((f) => f.id);
    return favFoodsId.includes(food.id);
  };

  return (
    <View className="m-3 ">
      <View className="border-2 p-0 flex flex-col justify-between  rounded-2xl border-gray-500 w-41 gap-3 h-56 ">
        <Image
          source={{ uri: food.img }}
          resizeMode="cover"
          className="w-40 h-28 rounded-2xl"
        />
        <Text numberOfLines={2} className="text-center">
          {food.name}
        </Text>

        <View>
          <View className="flex-row items-center justify-between mb-2">
            <View className="ml-2">
              <Pressable
                onPress={() =>
                  isFavFood() ? removeFavFoods(food.id) : updateFavFoods(food)
                }
              >
                <TabIcon
                  focused={isFavFood()}
                  className=""
                  name="favorite"
                  Icon={FavoriteIcon}
                />
              </Pressable>
            </View>
            <View className="mr-1">
              <Pressable onPress={() => router.navigate({
                pathname: '/screens/meal-details',
                params: {meal:JSON.stringify(food)}
              })}>
                <View className="bg-gray-950 w-28 h-9 rounded-xl justify-center">
                  <Text className="text-amber-50 text-center text-sm">
                    View Details
                  </Text>
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

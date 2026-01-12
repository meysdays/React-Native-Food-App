import { View, Text, Image, Pressable, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SharedHeader } from "@/components/shared";
import { router, useLocalSearchParams } from "expo-router";
import { TabIcon } from "@/components/ui";
import { MinusIcon, PlusIcon } from "@/assets/icons";
import { useCart } from "@/components/providers/cart-context";

interface FoodItemProps {
  name: string;
  img: string;
  id: string;
  category?: string;
  quantity: string;
}

const MealDetails = (cart: FoodItemProps) => {
  const { updateFavFoods } = useCart();

  const { top, bottom } = useSafeAreaInsets();

  const { meal } = useLocalSearchParams();

  const mealValue = Array.isArray(meal) ? meal[0] : meal;
  const meals = JSON.parse(mealValue);

  const [count, setCount] = useState<number>(1);
  const carts: {
    name: string;
    img: string;
    id: string;
    category: string;
    quantity: string;
  } = {
    name: meals.name,
    img: meals.img,
    id: meals.id,
    category: meals.category,
    quantity: count.toLocaleString(),
  };
  const addToCart = () => {
    updateFavFoods(carts);

    console.log(carts);
    router.back();
  };

  return (
    <View style={{ paddingTop: top, paddingBottom: bottom }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 150 }}>
        <SharedHeader></SharedHeader>

        <View className="w-84 h-78 mt-8 mx-6 bg-white rounded-4xl">
          <View className=" mx-auto my-auto">
            <Image
              source={{ uri: meals.img }}
              resizeMode="cover"
              className="w-64 h-54 rounded-2xl"
            />
          </View>
        </View>

        <View className="my-4 py-2 flex items-center">
          <View className=" flex-row bg-[#FF774C] w-28 justify-between px-2.5 py-5 items-center rounded-4xl">
            <View>
              <Pressable
                disabled={count === 1}
                onPress={() => setCount((prev) => prev - 1)}
                style={{
                  opacity: count === 1 ? 0.5 : 1,
                }}
              >
                <TabIcon name="plus" Icon={MinusIcon} size={12} />
              </Pressable>
            </View>
            <View>
              <Text className="text-xl">{count}</Text>
            </View>
            <View>
              <Pressable onPress={() => setCount((prev) => prev + 1)}>
                <TabIcon name="plus" Icon={PlusIcon} size={12} />
              </Pressable>
            </View>
          </View>
        </View>

        <View className="mx-5">
          <Text className="text-2xl font-bold text-center">{meals.name}</Text>
        </View>
        <View className="mx-4 my-4">
          <Text className="text-sm/7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quia
            placeat provident consequatur autem illo tempore eos assumenda vitae
            sit?
          </Text>
        </View>
      </ScrollView>
      <View style={{ bottom: bottom + 50 }}>
        <Pressable
          className="bg-[#FF774C] items-center mx-4 rounded-3xl py-5 my-6 "
          onPress={() => addToCart()}
        >
          <Text className="text-xl font-semibold text-white">Add to cart</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default MealDetails;

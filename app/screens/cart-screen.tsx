import { View, Text, ScrollView, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CartItem } from "@/components/home";
import { useCart } from "@/components/providers/cart-context";
import Swipeable from "react-native-gesture-handler/ReanimatedSwipeable";
import { FlatList } from "react-native-gesture-handler";
import { SwipeCard } from "@/components/library";
import { SharedHeader } from "@/components/shared";
import { router } from "expo-router";

interface cartItemProps {
  img: string;
  name: string;
  category: string;
  quantity: string;
  id: string;
}
// const SwipepCard = ({onEdit, onDelete}: Ca)

const CartScreen = () => {
  const { cart, removeFavFoods } = useCart();
  const { top, bottom } = useSafeAreaInsets();

  const totalQuantity = cart.reduce(
    (sum, item) => sum + Number(item.quantity),
    0
  );
  return (
    <View
      style={{ paddingTop: top, paddingBottom: bottom }}
      className=" bg-[#F8FBFF]"
    >
      <View>
        <ScrollView contentContainerStyle={{ paddingBottom: 150 }}>
          <SharedHeader></SharedHeader>
          <View className="mx-3">
            <Text className="mt-8 text-2xl font-medium">Your Cart</Text>

            <View className="mt-4">
              {cart.length === 0 ? (
                <Text>Your cart is empty</Text>
              ) : (
                cart.map((item) => (
                  <SwipeCard
                    key={item.id}
                    onEdit={() => console.log("edit", item.id)}
                    onDelete={() => removeFavFoods(item.id)}
                  >
                    <CartItem
                      id={item.id}
                      category={item.category}
                      name={item.name}
                      img={item.img}
                      quantity={item.quantity}
                      onDelete={() => removeFavFoods(item.id)}
                    />
                  </SwipeCard>
                ))
              )}
            </View>
          </View>

          <View className=" flex-row justify-between w-5/6 items-center mx-auto ">
            <Text className="">Total Items</Text>
            <Text className="text-xl font-bold mb-2">{totalQuantity}</Text>
          </View>
        </ScrollView>

        <View className=" w-5/6 mx-auto" style={{ bottom: bottom + 50 }}>
          <Pressable className="bg-[#FF774C] items-center  rounded-3xl py-3.5 " onPress={() => router.push({
            pathname: '/screens/payment-screen',
            params: { total:totalQuantity}
          })}>
            <Text className="text-sm font-semibold text-white">
              Process to payment
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default CartScreen;

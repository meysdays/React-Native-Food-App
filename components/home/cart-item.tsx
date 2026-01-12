import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { TabIcon } from "../ui";
import { MinusIcon, PlusIcon } from "@/assets/icons";

interface cartItemProps {
  img: string;
  name: string;
  category?: string;
  quantity: string;
  id: string;
  // onEdit?: () => void;
  onDelete?: () => void;
}
const CartItem = (cart: cartItemProps) => {
  return (
    <View className="p-3 w-full flex  bg-[#FFFFFF] my-3 rounded-2xl">
      <View className="flex-row justify-between">
        <View className=" flex-row flex-1">
          <Image
            source={{ uri: cart.img }}
            resizeMode="contain"
            className="size-18 rounded-2xl"
          />
          <View className="flex-col ml-2 justify-between">
            <Text  className="text-[14px]">
              {cart.name}
            </Text>
            <Text>{cart.category}</Text>
            <Text>$23.99</Text>
          </View>
        </View>

        <View className=" flex-row  w-1/5 items-center justify-between ">
          <Pressable className="bg-[#FF774C] size-6 rounded-full">
            <TabIcon
              size={10}
              className="absolute top-2 left-1.5"
              name="minus"
              Icon={MinusIcon}
            />
          </Pressable>
          <Text>{cart.quantity}</Text>
          <Pressable className="bg-[#FF774C] size-6 rounded-full">
            <TabIcon
              size={10}
              className="absolute top-1.5 left-2"
              name="minus"
              Icon={PlusIcon}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default CartItem;

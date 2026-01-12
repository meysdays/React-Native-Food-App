import { View, Text, ScrollView } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CartItem } from "@/components/home";
import { useCart } from "@/components/providers/cart-context";

interface cartItemProps {
  img: string;
  name: string;
  category: string;
  quantity: string;
  id: string;
}

const OrdersScreen = () => {
  const { cart, removeFavFoods } = useCart();
  const { top } = useSafeAreaInsets();
  return (
    <View style={{ paddingTop: top }} className="mx-4 bg-[#F8FBFF]">
      <Text>OrdersScreen</Text>
      <ScrollView>
        <View>
          <Text className="mt-8 text-2xl font-medium">Your Cart</Text>

          <View className="mt-4">
            {cart.length === 0 ? (
              <Text >Your cart is empty</Text>
            ) : (
              cart.map((item) => (
                <CartItem
                  key={item.id}
                  id={item.id}
                  category={item.category}
                  name={item.name}
                  img={item.img}
                  quantity={item.quantity}
                  onDelete={()=> removeFavFoods(item.id)}
                />
              ))
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default OrdersScreen;

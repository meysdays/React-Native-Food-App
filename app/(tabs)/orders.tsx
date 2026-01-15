import { View, Text, ScrollView, Pressable } from "react-native";
// import React, { useEffect, useState } from "react";
// import { useSafeAreaInsets } from "react-native-safe-area-context";
// import { CartItem } from "@/components/home";
// import { useCart } from "@/components/providers/cart-context";
// import Swipeable from "react-native-gesture-handler/ReanimatedSwipeable";
// import { FlatList } from "react-native-gesture-handler";
// import { SwipeCard } from "@/components/library";

interface cartItemProps {
  img: string;
  name: string;
  category: string;
  quantity: string;
  id: string;
}
// const SwipepCard = ({onEdit, onDelete}: Ca)

const OrdersScreen = () => {
  // const { bottom } = useSafeAreaInsets();
  // const { cart, removeFavFoods } = useCart();
  // const { top } = useSafeAreaInsets();
  // const [total, setTotal] = useState<string>("");

  // const totalQuantity = cart.reduce(
  //   (sum, item) => sum + Number(item.quantity),
  //   0
  // );
  return (
    <Text>Order Screen</Text>
    // <View style={{ paddingTop: top }} className="mx-4 bg-[#F8FBFF]">
    //   <Text>OrdersScreen</Text>
    //   <ScrollView>
    //     <View>
    //       <Text className="mt-8 text-2xl font-medium">Your Cart</Text>

    //       <View className="mt-4">
    //         {/* {cart.length === 0 ? (
    //           <Text>Your cart is empty</Text>
    //         ) : (
    //           cart.map((item) => (
    //             <CartItem
    //               key={item.id}
    //               id={item.id}
    //               category={item.category}
    //               name={item.name}
    //               img={item.img}
    //               quantity={item.quantity}
    //               onDelete={() => removeFavFoods(item.id)}
    //             />
    //           ))
    //         )} */}

    //         {/* <SwipeCard
    //           onEdit={() => console.log("edit", cart[0].id)}
    //           onDelete={() => console.log("edit", cart[0].id)}
    //         > */}

    //         {cart.length === 0 ? (
    //           <Text>Your cart is empty</Text>
    //         ) : (
    //           cart.map((item) => (
    //             <SwipeCard
    //               key={item.id}
    //               onEdit={() => console.log("edit", item.id)}
    //               onDelete={() => console.log("edit", item.id)}
    //             >
    //               <CartItem
    //                 id={item.id}
    //                 category={item.category}
    //                 name={item.name}
    //                 img={item.img}
    //                 quantity={item.quantity}
    //                 onDelete={() => removeFavFoods(item.id)}
    //               />
    //             </SwipeCard>
    //           ))
    //         )}
    //       </View>
    //     </View>
    //   </ScrollView>

    //   <Text className="text-xl font-bold mb-2">
    //     Total Items: {totalQuantity}
    //   </Text>

    //   <View className="mt-40" style={{ bottom: bottom }}>
    //     <Pressable className="bg-[#FF774C] items-center  rounded-3xl py-3.5 my-6 ">
    //       <Text className="text-sm font-semibold text-white">Process to payment</Text>
    //     </Pressable>
    //   </View>
    // </View>
  );
};

export default OrdersScreen;

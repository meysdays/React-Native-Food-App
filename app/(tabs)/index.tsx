import { View, Text, Pressable } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { theme } from "@/constants/theme";
import { SvgProps } from "react-native-svg";
import { CartIcon, clockIcon, LocationIcon, ProfileIcon } from "@/assets/icons";
import { CustomText, InputField } from "@/components/ui";
import TabIcon from "@/components/ui/tab-icon";
import { Categories } from "@/components/home";
import { Category } from "@/services/category/types";
import { router } from "expo-router";
import { useCart } from "@/components/providers/cart-context";
import { useAuth } from "@/components/providers/auth-context";

const HomeScreen = () => {
  const { user } = useAuth();
  const { updateFavFoods, cart } = useCart();
  const len = cart.length;
  const { top } = useSafeAreaInsets();
  const [selectedCategory, setSelectedCategory] =
    React.useState<Category | null>(null);

  return (
    <View style={{ paddingTop: top }} className="ml-3">
      <View className=" flex-row  items-center my-4 ">
        <View className="flex-row items-center bg-[#FCE2CF80] px-3.5 py-4 rounded-2xl ">
          <TabIcon name="profile" Icon={LocationIcon} />
          <CustomText style={{ color: "#EA985B", fontSize: 16 }}>
            32, Kingston LN.
          </CustomText>
        </View>

        <View>
          <View className="ml-3 flex-row items-center bg-[#FCE2CF80] px-3.5 py-4 rounded-2xl">
            <TabIcon name="clock" Icon={clockIcon} />
            <CustomText style={{ color: "#EA985B", fontSize: 16 }}>
              Order Now
            </CustomText>
          </View>
        </View>

        <Pressable onPress={() => router.navigate("/screens/cart-screen")}>
          <TabIcon size={26} name="cart" Icon={CartIcon} className="mr-6" />
          <View className="bg-[#FF774C] size-5  rounded-full items-center justify-center absolute bottom-3 left-5 border-2 border-white">
            <Text className="text-white  text-[10px]">{len}</Text>
          </View>
        </Pressable>
      </View>

      <View>
        {user ? (
          <Text className="text-3xl -mb-2">Good Evening {user.name}</Text>
        ) : (
          <View className="flex-row w-3/6 justify-between">
            <Pressable
              onPress={() => {
                router.navigate("/screens/login-screen");
              }}
              className="px-6 py-2 rounded-2xl  bg-[#FF774C]"
            >
              <Text className="text-center">Login</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                router.navigate("/screens/login-screen");
              }}
              className="px-6 py-2 rounded-2xl  bg-[#FF774C]"
            >
              <Text className="text-center">register</Text>
            </Pressable>
          </View>
        )}
      </View>

      <InputField placeholder="Search Food, Restaurants etc."></InputField>

      <Categories
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
    </View>
  );
};

// interface TabIconProps {
//   name: string;
//   Icon: React.FC<SvgProps>
//   // focused: boolean;
// }

// function TabIcon({name, Icon,}: TabIconProps) {
//   const {sizes} = theme;
//   const itemWidth = sizes.screen.width / 16;

//   return(
//     <View

//       style={[
//         {
//           width: itemWidth,
//           height: "auto",
//         }
//       ]}
//     >
//       <Icon
//         height={20}
//         width={20}
//       />

//     </View>
//   )
// }

export default HomeScreen;

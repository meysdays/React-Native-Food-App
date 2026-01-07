import { View, Text, ScrollView } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SharedHeader } from "@/components/shared";
import { InputField } from "@/components/ui";
import { FoodList } from "@/components/home";

const DetailScreen = () => {
  const { top } = useSafeAreaInsets();
  // const params = useLocalSearchParams();
  const { category } = useLocalSearchParams();

  const categoryValue = Array.isArray(category) ? category[0] : category;
  return (
    <View style={{ paddingTop: top }}>
      <SharedHeader></SharedHeader>

      <View className="ml-3 my-5">
        <Text className="text-4xl">{category}</Text>
        <InputField placeholder={`Search ${category}`}></InputField>
        <FoodList selectedCategory={categoryValue} />
      </View>
    </View>
  );
};

export default DetailScreen;

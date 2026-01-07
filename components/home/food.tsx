import { View, Text, FlatList } from "react-native";
import React from "react";
import { useGetMealsByCategory } from "@/hooks/food";
import FoodItem from "./food-item";
import DetailScreen from "@/app/details";
import { InputField } from "../ui";

interface FoodListProps {
  selectedCategory: string | undefined;
}

const FoodList = ({ selectedCategory }: FoodListProps) => {
  const { data, isLoading, isError } = useGetMealsByCategory(
    selectedCategory || ""
  );
  return (
    <View>
      {isLoading && <Text>Loading</Text>}

      {!isLoading && (
        <FlatList
          data={data?.meals}
          keyExtractor={(item) => item.idMeal}
          renderItem={({ item }) => (
            <FoodItem
              name={item.strMeal}
              img={item.strMealThumb}
              id={item.idMeal}
            />
          )}
          numColumns={2}
          // ListHeaderComponent={() => <DetailScreen/>}
        />
      )}
      <Text>FoodList</Text>
    </View>
  );
};

export default FoodList;

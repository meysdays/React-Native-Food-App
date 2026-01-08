import { View, Text, FlatList, Image } from "react-native";
import React from "react";
import { categoryItems } from "@/mock/index";
import { Category as CategoryType } from "@/services/category/types";
import { useGetCategories } from "@/hooks/category";
import CategoryItem from "./categories-item";
import { router } from "expo-router";

const ArrowRight = require("@/assets/images/arrow-right.png");

interface CategoryProps {
  selectedCategory: CategoryType | null;
  onSelectCategory: (category: CategoryType) => void;
}

const Category = ({ selectedCategory, onSelectCategory }: CategoryProps) => {
  const { data, isLoading, isError } = useGetCategories();

//   const handleNavigation = (item: CategoryType) =>{
//     onSelectCategory(item)
// }

  type CategoryListItem = CategoryType | { id: "see-all"; type: "see-all" };

  const MAX_ITEMS = 5;

  const listData: CategoryListItem[] = [
    ...(data?.categories.slice(0, MAX_ITEMS) ?? []),
    { id: "see-all", type: "see-all" },
  ];


  return (
    <View>
      {isLoading && <Text>Loading...</Text>}

      {!isLoading && (
        <FlatList
          data={listData || []}
          numColumns={3}
          keyExtractor={(item) => ("type" in item ? item.id : item.idCategory)}
          renderItem={({ item }) => {
            if ("type" in item) {
              return (
                <View className="mr-4 items-center">
                  <View className="w-28 h-28 rounded-full justify-center p-4 my-2 border-2 border-[#45B8E9]">
                    <Image
                      source={ArrowRight}
                      className=" h-7 mb-1"
                      resizeMode="contain"
                    />
                    <Text
                      className="text-xl font-medium text-center text-[#45B8E9]"
                      numberOfLines={2}
                    >
                      See all
                    </Text>
                  </View>
                </View>
              );
            }
            return (
              <CategoryItem
                name={item.strCategory}
                imageUrl={item.strCategoryThumb}
                id={item.idCategory}
                selected={item.idCategory === selectedCategory?.idCategory}
                onPress={() => {
                  router.push({
                    pathname: '/details',
                    params: { category: item.strCategory }
                  })
                }}
              />
            );
          }}
        />
      )}
    </View>
  );
};

export default Category;

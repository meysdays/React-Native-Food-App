import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'

import {categoryItems} from '@/mock/index'
import {Category as CategoryType } from '@/services/category/types'
import { useGetCategories } from '@/hooks/category';

interface CategoryCircleProps {
      selectedCategory: CategoryType  | null;
      onSelectCategory: (category: CategoryType) => void;
    }

const CategoryCircle = ({ selectedCategory, onSelectCategory }: CategoryCircleProps) => {

  const {data, isLoading, isError} = useGetCategories();

    const CategoryItem = ({idCategory, strCategory,strCategoryThumb, strCategoryDescription}: CategoryType) => {
      return(
        <View className='mr-4 items-center'>

          <View className='w-28 h-28 rounded-full bg-pink-100 justify-center p-4 my-2'>
            <Image
              source={{uri: strCategoryThumb}}
              className=' h-14 mb-1'
              resizeMode='contain'
            />
          <Text className='text-xs font-medium text-gray-900 text-center'
          numberOfLines={2}>
            {strCategory}
          </Text>
          </View>
        </View>
      )
        // return(
        //   <View>

        // <View className='rounded-full flex flex-col justify-center w-28 h-28 bg-[#F4739E1F] my-2 mr-3 items-center' >
        //   </View>
            
        //       <View className='text-center' >
        //         <Image source={strCategoryThumb}
        //             className=' w-24 h-20 absolute bottom-8 left-4 items-center'
        //             resizeMode='center'
        //          />
        //     <Text className='absolute bottom-6 left-7 font-medium text-lg '>{strCategory}</Text>
        //       </View>
             
           
        
        //   </View>
        // )
    }

  return (
    <View>
      {/* <Text>CategoryCircle</Text> */}

      {isLoading && <Text>Loading...</Text>}

      {!isLoading  && (
      <FlatList
        data={data?.categories || []}
        numColumns={3}
        // horizontal={false}
        keyExtractor={(item) => item.idCategory}
        renderItem={({ item }) => <CategoryItem 
        idCategory={item.idCategory} 
        strCategory={item.strCategory} strCategoryThumb={item.strCategoryThumb} 
        strCategoryDescription={item.strCategoryDescription}/>}
        // horizontal
        // showsHorizontalScrollIndicator={false}
        // contentContainerStyle={{ paddingHorizontal: 16 }}
      />
      )}
    </View>
  )
}

export default CategoryCircle
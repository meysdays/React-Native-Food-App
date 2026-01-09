import { FavoriteIcon } from "@/assets/icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { useFavFood } from "../providers/FavFoodContextProvider";
import { TabIcon } from "../ui";

interface FoodItemProps {
  name: string;
  img: string;
  id: string;
  category?: string;
}
const FoodItem = ({ name, img, id, category }: FoodItemProps) => {
  const { value, save } = useAsyncStorage("meals");

  const mealValue: FoodItemProps = {
    name,
    img,
    id,
    category,
  };
  const getImg = ({ name, img, id, category }: FoodItemProps) => {
    // console.log(img);
    mealValue.name = name;
    mealValue.img = img;
    mealValue.id = id;
    mealValue.category = category;
  };
  async function addFavorite(
    name: string,
    img: string,
    id: string,
    category?: string
  ) {
    getImg({ name, img, id, category });
    // save({
    //   id,
    //   name,
    //   img,
    //   category
    // });

    try {
      const existing = await AsyncStorage.getItem("meals");
      const list = existing ? JSON.parse(existing) : [];

      const updated = [...list, mealValue];

      await AsyncStorage.setItem("meals", JSON.stringify(updated));
      console.log(updated);
      // load()
    } catch (error) {
      console.log(error, "error");
    }
  }

  async function removeFavorite(id: string) {
    const existing = await AsyncStorage.getItem("meals");
    const list = existing ? JSON.parse(existing) : [];

    const updated = list.filter((meal: any) => meal.id !== id);

    await AsyncStorage.setItem("meals", JSON.stringify(updated));
  }

  const [open, setOpen] = useState(false);

  const checkList = () => {
    if (open) {
      addFavorite(name, img, id, category);

      console.log(favo, "here");

      return;
    } else {
      removeFavorite(id);
    }
    // AsyncStorage.removeItem("meals");
    // console.log("removed");
  };

  const [favo, setFavo] = useState<string[]>([]);

  async function load() {
    const fav = await AsyncStorage.getItem("meals");
    const list = fav ? JSON.parse(fav) : [];

    setFavo(list);
  }

  async function toggleFavorite(id: string) {
    let newState: string[] = [];

    if (favo.includes(id)) {
      // remove id
      newState = favo.filter((favId) => favId !== id);
    } else {
      // add id
      newState = [...favo, id];
    }

    setFavo(newState);
    await AsyncStorage.setItem("favoriteMeals", JSON.stringify(newState));
  }

  useEffect(() => {
    load();
  }, []);

  useEffect(() => {
    checkList();
  }, [open]);

  const isFavorite = favo.includes(id);
  return (
    <View className="m-3 ">
      <View className="border-2 p-0 flex flex-col justify-between  rounded-2xl border-gray-500 w-41 gap-3 h-56 ">
        <Image
          source={{ uri: food.img }}
          resizeMode="cover"
          className="w-40 h-28 rounded-2xl"
        />
        <Text numberOfLines={2} className="text-center">
          {food.name}
        </Text>

        <View>
          <View className="flex-row items-center justify-between mb-2">
            <View className="ml-2">
              <Pressable onPress={() => updateFavFoods(food)}>
                <TabIcon
                  focused={isFavFood()}
                  className=""
                  name="favorite"
                  Icon={FavoriteIcon}
                />
              </Pressable>
            </View>
            <View className="mr-1">
              <Pressable onPress={() => removeFavFoods(food.id)}>
                <View className="bg-gray-950 w-28 h-9 rounded-xl justify-center">
                  <Text className="text-amber-50 text-center text-sm">
                    View Details
                  </Text>
                </View>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
      {/* <Text>FoodItem</Text> */}
    </View>
  );
};

export default FoodItem;

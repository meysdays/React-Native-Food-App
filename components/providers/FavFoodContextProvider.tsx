import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface FoodItemProps {
    name: string;
    img: string;
    id: string;
    category?: string;
}

interface ContextValue {
    favFoods: FoodItemProps[];
    updateFavFoods: (food: FoodItemProps) => Promise<void>;
    removeFavFoods: (id: string) => Promise<void>;
}

const FavFoodsContext = createContext<ContextValue | undefined>(undefined);

export const FavFoodContextProvider = ({ children }: { children: ReactNode }) => {
    const [favFoods, setFavFoods] = useState<FoodItemProps[]>([]);

    // Load favorites from AsyncStorage on mount
    useEffect(() => {
        const loadFavFoods = async () => {
            try {
                const result = await AsyncStorage.getItem("meals");
                if (result) {
                    const parsed = JSON.parse(result);
                    setFavFoods(parsed);
                }else{
                    setFavFoods([])
                }
            } catch (error) {
                console.error("Error loading favorites:", error);
            }
        };
        loadFavFoods();
    }, []);

    const updateFavFoods = async (food: FoodItemProps) => {
        try {
            const updated = [...favFoods, food];
            setFavFoods(updated);
            await AsyncStorage.setItem("meals", JSON.stringify(updated));
        } catch (error) {
            console.error("Error saving favorites:", error);
        }
    };

    const removeFavFoods = async (id: string) => {
        const updatedFavFoods = favFoods.filter((fv) => fv.id !== id);
        setFavFoods(updatedFavFoods);
        await AsyncStorage.setItem("meals", JSON.stringify(updatedFavFoods))
    }

    return (
        <FavFoodsContext.Provider value={{ favFoods, updateFavFoods, removeFavFoods }}>
            {children}
        </FavFoodsContext.Provider>
    );
};

export const useFavFood = () => {
    const context = useContext(FavFoodsContext);
    if (!context) {
        throw new Error("useMyContext must be used within MyContextProvider");
    }
    return context;
};
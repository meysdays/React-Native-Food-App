import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface CartItemProps {
    name: string;
    img: string;
    id: string;
    category?: string;
    quantity: string
}

interface ContextValue {
    cart: CartItemProps[];
    updateFavFoods: (cart: CartItemProps) => Promise<void>;
    removeFavFoods: (id: string) => Promise<void>;
}

const CartContext = createContext<ContextValue | undefined>(undefined);

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<CartItemProps[]>([]);

    // Load favorites from AsyncStorage on mount
    useEffect(() => {
        const loadCart = async () => {
            try {
                const result = await AsyncStorage.getItem("cart");
                if (result) {
                    const parsed = JSON.parse(result);
                    setCart(parsed);
                }else{
                    setCart([])
                }
            } catch (error) {
                console.error("Error loading favorites:", error);
            }
        };
        loadCart();
    }, []);

    const updateFavFoods = async (food: CartItemProps) => {
        try {
            const updated = [...cart, food];
            setCart(updated);
            await AsyncStorage.setItem("cart", JSON.stringify(updated));
        } catch (error) {
            console.error("Error saving favorites:", error);
        }
    };

    const removeFavFoods = async (id: string) => {
        const updatedFavFoods = cart.filter((fv) => fv.id !== id);
        setCart(updatedFavFoods);
        await AsyncStorage.setItem("cart", JSON.stringify(updatedFavFoods))
    }

    return (
        <CartContext.Provider value={{ cart, updateFavFoods, removeFavFoods }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useMyContext must be used within MyContextProvider");
    }
    return context;
};
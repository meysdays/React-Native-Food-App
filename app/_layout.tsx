import { ReactQueryClientProvider } from "@/components/providers";
import "../global.css";
import { Stack } from "expo-router";
import { FavFoodContextProvider } from "@/components/providers/FavFoodContextProvider";
import { CartContextProvider } from "@/components/providers/cart-context";

export default function RootLayout() {
  return (
    <ReactQueryClientProvider>
      <FavFoodContextProvider>
        <CartContextProvider>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="details" options={{ headerShown: false }} />
            <Stack.Screen
              name="meal-details"
              options={{ headerShown: false }}
            />
          </Stack>
        </CartContextProvider>
      </FavFoodContextProvider>
    </ReactQueryClientProvider>
  );
}

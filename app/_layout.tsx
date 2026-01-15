import { ReactQueryClientProvider } from "@/components/providers";
import "../global.css";
import { Stack } from "expo-router";
import { FavFoodContextProvider } from "@/components/providers/FavFoodContextProvider";
import { CartContextProvider } from "@/components/providers/cart-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <ReactQueryClientProvider>
      <GestureHandlerRootView>
        <FavFoodContextProvider>
          <CartContextProvider>
            <Stack>
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              <Stack.Screen name="screens/details" options={{ headerShown: false }} />
              <Stack.Screen
                name="screens/meal-details"
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="screens/cart-screen"
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="screens/payment-screen"
                options={{ headerShown: false }}
              />
            </Stack>
          </CartContextProvider>
        </FavFoodContextProvider>
      </GestureHandlerRootView>
    </ReactQueryClientProvider>
  );
}

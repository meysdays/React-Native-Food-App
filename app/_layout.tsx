import { ReactQueryClientProvider } from "@/components/providers";
import "../global.css"
import { Stack } from "expo-router";
import { FavFoodContextProvider } from "@/components/providers/FavFoodContextProvider";

export default function RootLayout() {
  return (
    <ReactQueryClientProvider>
      <FavFoodContextProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="details" options={{ headerShown: false }} />
        </Stack>
      </FavFoodContextProvider>
    </ReactQueryClientProvider>
  );
}

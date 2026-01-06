import { ReactQueryClientProvider } from "@/components/providers";
import "../global.css"
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <ReactQueryClientProvider>
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
    </ReactQueryClientProvider>
  );
}

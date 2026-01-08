import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function useAsyncStorage<T = any>(key: string) {
  const [value, setValue] = useState< T[] | null>(null);

  async function load() {
    const stored = await AsyncStorage.getItem(key);
    if (stored) {
      setValue(JSON.parse(stored));
    }else {
      setValue([])
    }
  }

  async function save(newValue: T) {
    try {
      const existing = await AsyncStorage.getItem(key);
      const list: T[] = existing ? JSON.parse(existing) : [];

      const updated = [...list, newValue];

      await AsyncStorage.setItem(key, JSON.stringify(updated));
      // parsed.push(newValue)

      setValue(updated);
    } catch (error) {
      console.log("Error:", error);
    }
  }

  async function remove() {
    await AsyncStorage.removeItem(key);
    setValue(null);
  }

  // useEffect(() => {
  //   load();
  // }, []);

  return { value, save, remove };
}

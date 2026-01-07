import { mergeApiUrl } from "@/lib/utils";
import { FoodResponse } from "./types";

class FoodService {
  private routes = {
    get_meals_by_category(category: string) {
      return mergeApiUrl(`filter.php?c=${category}`);
    },
  };
  async fetchCategories(category: string): Promise<FoodResponse | null> {
    try {
      const response = await fetch(
        this.routes.get_meals_by_category(category)
      );
      const data: FoodResponse = await response.json();
      if (!response.ok) {
        throw new Error("An error occured while fetching categories");
      }
      return data;
    } catch (e) {
      if (e instanceof Error) {
        throw new Error(e?.message);
      }
      throw new Error(
        (e as string) || "An unexpected error occured while fetching categories"
      );
    }
  }
}

export const foodService = () => new FoodService();

import { mergeApiUrl } from "@/lib/utils";
import { CategoryResponse } from "./types";

class CategoryService {
    private routes = {
        get_categories: mergeApiUrl("categories.php"),
    };
    async fetchCategories(): Promise<CategoryResponse | null> {
        try {
          const response = await fetch(this.routes.get_categories);
          const data: CategoryResponse = await response.json();
          if (!response.ok) {
            throw new Error('An error occured while fetching categories');
          }
          return data;
        } catch (e) {
          if (e instanceof Error) {
            throw new Error(e?.message);
          }
          throw new Error(
            (e as string) || "An unexpected error occured while fetching categories"
          )
        }
    }
}

export const categoryService = () => new CategoryService();
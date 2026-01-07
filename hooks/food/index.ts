import { foodService } from "@/services/food";
import { useQuery } from "@tanstack/react-query";

export function useGetMealsByCategory(category: string) {
    return useQuery({
        queryKey: ["meals"],
        queryFn: () => foodService().fetchCategories(category)
    })
}
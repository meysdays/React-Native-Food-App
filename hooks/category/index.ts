import { categoryService } from "@/services/category";
import { useQuery } from "@tanstack/react-query";

export function useGetCategories() {
    return useQuery({
        queryKey: ['categories'],
        queryFn: () => categoryService().fetchCategories(),
    });
}
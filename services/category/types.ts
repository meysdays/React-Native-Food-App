import { ImageSourcePropType } from "react-native";

// export interface CategoryType {
//   idCategory: string;
//   strCategory: string;
//   strCategoryThumb: ImageSourcePropType;
//   //strCategoryDescription: string;
// }
export interface Category {
  idCategory: string;
  strCategory: string;
  strCategoryDescription: string;
  strCategoryThumb: string;
}

export interface CategoryResponse {
  categories: Category[];
}
export interface Meal{
    strMeal:string;
    strMealThumb:string;
    idMeal:string;
}

export interface FoodResponse{
    meals:Meal[];
}
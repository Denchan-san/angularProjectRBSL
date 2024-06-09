import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
        new Ingredient('Cucumbers', 15),
      ];

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
    }

    onIngredientDelete() {

    }

    getIngredients() {
        return this.ingredients.slice();
    }
}
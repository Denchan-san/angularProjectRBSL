import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Ragu',
            'This is a simply recipe',
            'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=300,272',
            [
                new Ingredient('Meat', 1),
                new Ingredient('Vegs', 20)
            ]
        ),
        new Recipe(
            'Sandwiches',
            'This is a simply recipe 2',
            'https://images.immediate.co.uk/production/volatile/sites/30/2024/04/MonteCristoSandwich-7cbdfe9.jpg?quality=90&webp=true&resize=300,272',
            [
                new Ingredient('Ham', 1),
                new Ingredient('Bread', 2),
                new Ingredient('Cheese',1)
            ]
        )
      ];

    constructor(private shoppingListService: ShoppingListService) {  }

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}
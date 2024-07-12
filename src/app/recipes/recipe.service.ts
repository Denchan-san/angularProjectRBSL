import { Injectable } from "@angular/core";

import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";
import { RecursiveAstVisitor } from "@angular/compiler";

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

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

    getRecipe(id: number) {
        return this.recipes[id];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
    }
}
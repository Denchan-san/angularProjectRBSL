import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { map } from "rxjs";

//need to add if u want to inject service into other serice (httpService -> this service)
@Injectable({providedIn:'root'}) 
export class DataStorageService {
    constructor(private http: HttpClient,
                private recipeService: RecipeService) {}

    storeRecipes() {
        const recipes = this.recipeService.getRecipes();
        this.http
         .put(
           'https://ng-course-recipe-book-df794-default-rtdb.europe-west1.firebasedatabase.app/recipes.json',
            recipes
         )
         .subscribe( response => {
            console.log(response);
         });
    }
    
    fetchRecipes() {
        this.http
          .get<Recipe[]>(
            'https://ng-course-recipe-book-df794-default-rtdb.europe-west1.firebasedatabase.app/recipes.json'
          )
          .subscribe(recipes => {
            console.log('getting recipes..');
            this.recipeService.setRecipes(recipes);
          });
      }
}
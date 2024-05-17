import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe','This is a simply recipe', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=300,272'),
    new Recipe('A Test Recipe 2','This is a simply recipe 2', 'https://images.immediate.co.uk/production/volatile/sites/30/2024/04/MonteCristoSandwich-7cbdfe9.jpg?quality=90&webp=true&resize=300,272')
  ];


  onRecipeSelected(recipe: Recipe) {  
    this.recipeWasSelected.emit(recipe)
  }
}

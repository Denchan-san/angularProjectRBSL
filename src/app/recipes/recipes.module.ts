import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeStartComponent,
    RecipeDetailComponent,
    RecipeEditComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeStartComponent,
    RecipeDetailComponent,
    RecipeEditComponent,
  ],
})
export class RecipesModule {}

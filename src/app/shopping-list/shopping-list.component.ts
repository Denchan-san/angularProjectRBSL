import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private ingredientChangeSubscription: Subscription;

  constructor(
    private shopingListService: ShoppingListService,
    private loggingService: LoggingService
  ) {}

  ngOnInit() {
    this.loggingService.printLog('Hello from ShoppingListComponent NgOnInit')
    this.ingredients = this.shopingListService.getIngredients();
    this.ingredientChangeSubscription =
      this.shopingListService.ingredientsChanged.subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      );
  }

  ngOnDestroy(): void {
    this.ingredientChangeSubscription.unsubscribe();
  }

  onEditItem(index: number) {
    this.shopingListService.startedEditing.next(index);
  }
}

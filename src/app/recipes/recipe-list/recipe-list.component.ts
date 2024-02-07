import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit{
@Output()  RecipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Test recipe', 'This is just a test', 'https://www.budgetbytes.com/wp-content/uploads/2013/07/How-to-Calculate-Recipe-Costs-H.jpg'),
    new Recipe('Another test recipe', 'This is just a test', 'https://www.budgetbytes.com/wp-content/uploads/2013/07/How-to-Calculate-Recipe-Costs-H.jpg'),
  ];

  constructor() { };

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  };

  onRecipeSelected(recipe: Recipe) {
    this.RecipeSelected.emit(recipe);
  }
}

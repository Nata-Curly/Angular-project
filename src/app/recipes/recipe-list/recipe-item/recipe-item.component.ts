import { RecipeService } from './../../recipe.service';
import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private RecipeService: RecipeService) { }
  
  ngOnInit(): void {
    
  }
 
  onSelected() {
    this.RecipeService.recipeSelected.emit(this.recipe);
}

  // onRecipeDetail() {
  //   this.recipeDetailSelected.emit();
  // }
}

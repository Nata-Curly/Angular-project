import { RecipeService } from './../recipe.service';
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit{
  recipes: Recipe[];

  constructor(private RecipeService: RecipeService) { };

  ngOnInit(): void {
    this.recipes = this.RecipeService.getRecipes();
  };

}

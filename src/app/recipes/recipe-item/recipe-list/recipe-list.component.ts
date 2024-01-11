import { Component } from "@angular/core";
import { recipeData } from "../../recipe.data";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrl: "./recipe-list.component.css",
})
export class RecipeListComponent {
  recipes = recipeData;
  constructor() {}
  ngOnInit() {}
}

import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      "Recipe 1",
      "Testdata 1",
      "https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg",
      [new Ingredient("Meat", 1), new Ingredient("French Fries", 1)],
    ),
    new Recipe(
      "Recipe 2",
      "Testdata 2",
      "https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg",
      [new Ingredient("Meat", 2), new Ingredient("French Fries", 2)],
    ),
    new Recipe(
      "Recipe 3",
      "Testdata 3",
      "https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg",
      [new Ingredient("Meat", 3), new Ingredient("French Fries", 3)],
    ),
    new Recipe(
      "Recipe 4",
      "Testdata 4",
      "https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg",
      [new Ingredient("Meat", 4), new Ingredient("French Fries", 4)],
    ),
  ];
  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}

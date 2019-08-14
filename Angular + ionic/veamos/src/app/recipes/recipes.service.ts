import { Injectable } from "@angular/core";
import { Recipes } from "./recipe.model";

@Injectable({
  providedIn: "root"
})
export class RecipesService {
  private recipes: Recipes[] = [
    {
      id: "r1",
      title: "Apple pie",
      imageUrl:
        "https://www.comedera.com/wp-content/uploads/2015/02/receta-de-pie-de-manzana.jpg",
      ingredients: ["azucar", "manzana", "harina"]
    },
    {
      id: "r2",
      title: "Malvavisco",
      imageUrl:
        "https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2017/11/bombones.jpg",
      ingredients: ["azucar", "gelatina", "maicena"]
    }
  ];

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })
    };
  }
  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }
  constructor() {}
}

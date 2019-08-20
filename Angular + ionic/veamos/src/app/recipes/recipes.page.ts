import { Component, OnInit, OnDestroy } from "@angular/core";
import { Recipes } from "./recipe.model";
import { RecipesService } from "./recipes.service";
import { ThemeService } from "../theme.service";

const themes = {
  dark: {
    primary: "#00eed1",
    secondary: "#0cd1e8",
    tertiary: "#7044ff",
    success: "#10dc60",
    dark: "#222428",
    medium: "#989aa2",
    light: "#7044ff",
    warning: "#f271e3",
    danger: "#222428"
  },
  light: {
    primary: "#3880ff",
    secondary: "#0cd1e8",
    tertiary: "#7044ff",
    success: "#10dc60",
    dark: "#222428",
    medium: "#989aa2",
    light: "#f4f5f8",
    warning: "#ffce00",
    danger: "#f04141"
  }
};

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.page.html",
  styleUrls: ["./recipes.page.scss"]
})
export class RecipesPage implements OnInit, OnDestroy {
  recipes: Recipes[];
  public black: boolean = true;

  constructor(
    private recipeServ: RecipesService,
    private theme: ThemeService
  ) {}

  changeT() {
    if (this.black) {
      this.changeTheme("dark");
    } else {
      this.changeTheme("light");
    }
  }
  changeTheme(name) {
    this.theme.setTheme(themes[name]);
  }

  ngOnInit() {
    this.changeTheme("dark");
    console.log("ngOnInit()");
  }

  ionViewWillEnter() {
    this.recipes = this.recipeServ.getAllRecipes();
    console.log("ionViewWillEnter");
    console.log(this.recipes);
  }
  ionViewWillLeave() {
    console.log("ionViewWillLeave");
  }
  ionViewDidEnter() {
    console.log("ionViewDidEnter");
  }
  ionViewDidLeave() {
    console.log("ionViewDidLeave");
  }
  ngOnDestroy() {
    console.log("ngOnDestroy");
  }
}

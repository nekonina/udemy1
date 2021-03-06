import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { RecipesService } from "../recipes.service";
import { Recipes } from "../recipe.model";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.page.html",
  styleUrls: ["./recipe-detail.page.scss"]
})
export class RecipeDetailPage implements OnInit, OnDestroy {
  loadRecipe: Recipes;
  constructor(
    private activateRoute: ActivatedRoute,
    private recepiesServ: RecipesService,
    private router: Router,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    console.log("ngOnInit");
    this.activateRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has("recipeId")) {
        this.router.navigate(["./recipes"]);
        return;
      }
      const recipeId = paramMap.get("recipeId");
      this.loadRecipe = this.recepiesServ.getRecipe(recipeId);
    });
  }
  ionViewWillEnter() {
    console.log("ionViewWillEnter");
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
  delRecipe() {
    this.alertCtrl
      .create({
        header: "you are sure?",
        mode: "ios",
        message: "this are eliminated forever x.x ",
        buttons: [
          {
            text: "cancel",
            role: "cancel",
            cssClass: "cancel"
          },
          {
            text: "Delete",
            cssClass: "shure",
            handler: () => {
              this.recepiesServ.deleteRecipe(this.loadRecipe.id);
              this.router.navigate(["./recipes"]);
            }
          }
        ]
      })
      .then(alertEl => {
        alertEl.present();
      });
  }
}

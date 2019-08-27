import { Component, OnInit } from '@angular/core';
import { RecipesService } from './recipes.service';
import { Recipe } from './recipes.model';

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.page.html',
    styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
    recipes: Recipe[];

    constructor(private recipesService: RecipesService) { }

    ngOnInit() {
        this.recipes = this.recipesService.getAllRecipes();
    }

    itemClick(id : any){
        this.recipesService.getRecipe(id);
    }

    itemHapus(id :any){
        this.recipesService.deleteRecipe(id);
        this.recipes = this.recipesService.getAllRecipes();
    }
}

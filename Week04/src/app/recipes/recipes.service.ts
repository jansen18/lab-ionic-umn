import { Injectable } from '@angular/core';
import { Recipe } from './recipes.model';

@Injectable({
    providedIn: 'root'
})
export class RecipesService {
    private recipes: Recipe[] = [
        {
            id: 'r1',
            title: 'Gado-gado',
            imageUrl: 'https://i1.wp.com/resepkoki.id/wp-content/uploads/2016/12/Resep-Gado-Gado.jpg?fit=2461%2C2359&ssl=1',
            ingredients: [
                'Lontong',
                'Sawi',
                'Bumbu kacang',
                'Tauge'
            ]
        },
        {
            id: 'r2',
            title: 'Nasi Goreng',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Nasi_goreng_indonesia.jpg',
            ingredients: [
                'Nasi',
                'Bawang putih',
                'Bawang merah',
                'Garam',
                'Merica'
            ]
        },
        {
            id: 'r3',
            title: 'Nasi Putih',
            imageUrl: 'https://hellosehat.com/wp-content/uploads/2017/09/mitos-nasi.jpg',
            ingredients: [
                'Beras',
                'Air'
            ]
        }
    ];
    constructor() { }

    getAllRecipes(){
        return [...this.recipes];
    }
    getRecipe(recipeId: string){
        return {
            ...this.recipes.find( recipe => {
                return recipe.id === recipeId;
            })
        };
    }
    deleteRecipe(recipeId: string){
        this.recipes = this.recipes.filter(recipe => {
            return recipe.id !== recipeId;
        });
    }
}

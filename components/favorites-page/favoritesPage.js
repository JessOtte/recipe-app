"use strict";

angular
    .module("RecipeApp")

    .component("favoritesPage", {
        controller: ['RecipeService',function (RecipeService) {
            // console.log(`Is it working: ${RecipeService.fetchRecipes}`);
            const ctrl = this;
            ctrl.search = "";
            ctrl.favs = null;

            ctrl.favs = RecipeService.getFavorites();
            console.log(`favs:`)
    
            ctrl.removeRecipe = function (key, value) {
                ctrl.favs.splice(key, 1)
            }

            ctrl.callRecipeDetails = (recipe) => {
                // console.log(recipe);
                ctrl.showDetailModule = true;
                RecipeService.setDetails(recipe)
            }

        }],

        template: `

        <div ng-if="$ctrl.showDetailModule" class="show">
        <recipe-details module-flag="$ctrl.showDetailModule"></recipe-details>
        </div>
            <section id="favorites-page">
                <div class="container">
                    <h1>Favorites</h1>
                    <p>Your Favorites</p>
                    <div ng-repeat="recipe in $ctrl.favs">
                        <p style="color:white;">{{recipe.label}}</p>
                        <button ng-click="$ctrl.removeRecipe($index, recipe)">X</button>
                        <button class="btn btn-primary" ng-click="$ctrl.callRecipeDetails(recipe)">Recipe Details</button>


                    </div>
                </div>
            </section>
        `
    });
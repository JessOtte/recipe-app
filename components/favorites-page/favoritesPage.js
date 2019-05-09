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


        <div ng-if="$ctrl.showDetailModule" class="window"></div>

        <div ng-if="$ctrl.showDetailModule" id="favorites-model" class="show">
        <recipe-details module-flag="$ctrl.showDetailModule"></recipe-details>
        </div>


            <section id="favorites-page">
                <div class="container">
                    <h1 class="favorites">Your Favorite Recipes</h1>
                    <p class="favorites">Make your favorite meals at home!</p>

                    <div ng-repeat="recipe in $ctrl.favs" class="card mb-4">
                        <div class="card-deck text-center">
                        <div ng-class="row">
                        <img class="card-img-top" ng-src="{{recipe.img}}" alt="{{recipe.label}}">
                        <div class="card-body">
                        <h5 class="card-title">{{recipe.label}}</h5>
                        
                        <p class="card-text"><small class="text-muted">{{recipe.ingredients}} Ingredients | Calories: 
                        <span class="cardParams">{{recipe.calories | number:0}}</span>
                        </small></p>
                        <button class="btn btn-primary" ng-click="$ctrl.removeRecipe($index, recipe)">Remove from Favorites</button>
                        <button class="btn btn-primary" ng-click="$ctrl.callRecipeDetails(recipe)">Recipe Details</button>


                    </div>
                </div>
            </section>
        `
    });
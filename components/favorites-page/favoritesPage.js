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
            console.log(ctrl.favs);

            ctrl.favoritesList = [
                {
                    label: 'Apple',
                    img: "img.jpeg",
                    calories: '10',
                    ingredients: 1,
                    servings: 1
                },

                {
                    label: 'Pear',
                    img: "img",
                    calories: '10',
                    ingredients: 1,
                    servings: 1
                },

                {
                    label: 'Peach',
                    img: "img.jpeg",
                    calories: '10',
                    ingredients: 1,
                    servings: 1
                }
            ];

            ctrl.removeRecipe = function () {
                console.log(`Removed from favorites`);
                let remove;
                return remove = true;
            }

        }],

        template: `
            <section id="favorites-page">
                <div class="container">
                    <h1>Favorites</h1>
                    <p>Your Favorites</p>
                    <div ng-repeat="recipe in $ctrl.favs">
                        <p style="color:white;">{{recipe.label}}</p>
                        <button>X</button>
                        <!--
                        <recipe-details recipe="recipe"></recipe-details>
                        -->
                    </div>
                </div>
            </section>
        `
    });
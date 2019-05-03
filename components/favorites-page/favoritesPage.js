"use strict";

angular
.module("RecipeApp")

.component("favoritesPage", {
    // bindings: {},
    controller: [function (RecipeService) {
        const $ctrl = this;
        $ctrl.search = "";
        
        $ctrl.favoritesList = [
            {
                recipe: `Apple`,
                deleted: false,
                favorited: true
        
            },

            {
                recipe: `Pear`,
                deleted: false,
                favorited: true
            },

            {
                recipe: `Peach`,
                deleted: false,
                favorited: true
            }
        ];

        $ctrl.removeRecipe = function () {
            console.log(`Removed from favorites`);
            let remove;
            return remove = true;
        }

        // //add object to array with user input
        // $ctrl.addRecipe = (newReciep) => {
        //     console.log(newTask);
        //     $ctrl.todoList.push({ recipe: newReciep, deleted: false });
        // }

    }],

    template: `
<div class="container">
<h1>Favorites</h1>
<p>Your Favorites</p>
<div ng-repeat="recipe in $ctrl.favoritesList">{{recipe.recipe}}</div>
</div>`



//     template: `
// <div class="container">
// <h1>FAVORITES</h1>
// <p>Your Favorites</p>
// <filter-component search="search"></filter-component>
// <-list-component search="search" tasks="$ctrl.favoritesList" remove-task="$ctrl.removeRecipe()"></list-component>
// </div>`
});
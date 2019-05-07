"use strict";

angular
.module("RecipeApp")
.component("favoritesPage", {
    // bindings: {},
    controller: [function () {
        // console.log(`Is it working: ${RecipeService.fetchRecipes}`);
        const $ctrl = this;
        $ctrl.search = "";
        
        $ctrl.favoritesList = [
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
<section id="favorites">
<div class="container">
<h1>Favorites</h1>
<p>Your Favorites</p>
<div ng-repeat="recipe in $ctrl.favoritesList">
{{recipe.label}}
<recipe-details recipe="recipe"></recipe-details>
<div><button>X</button><div>
</div>
</div>
</section>
`
});

        // }],

//         template: `
// <div class="container">
// <h1>Favorites</h1>
// <p>Your Favorites</p>
// <div ng-repeat="recipe in $ctrl.favs">
// <p style="color:white;">{{recipe.label}}</p>
// <button>X</button>

// <recipe-details recipe="recipe"></recipe-details>

// </div>
// </div>`,
        bindings: {
            favs: "="
        }


        //     template: `
        // <div class="container">
        // <h1>FAVORITES</h1>
        // <p>Your Favorites</p>
        // <filter-component search="search"></filter-component>
        // <-list-component search="search" tasks="$ctrl.favoritesList" remove-task="$ctrl.removeRecipe()"></list-component>
        // </div>`
    // });
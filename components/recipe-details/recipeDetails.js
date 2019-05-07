// function RecipeDetails(RecipeService, $q) {
//     const ctrl = this;
//     ctrl.fetchRecipes = [];
  
//     // ctrl.recipeDetails= [];
//     // RecipeService.fetchRecipes()
//     //   .then((response) => {
  
//     //     ctrl.recipeDetails = response;
//     //     console.log(response);
//     //   });
  
  
//     ctrl.recipeDetails = [
//       {
//         label: "Chicken Quesadilla",
//         img: "img.jpg",
//         calories: '1000',
//         ingredients: "10",
//         servings: "5",
//       },
//     ]
  
//   }






// angular.module('RecipeApp').component('recipeDetails', {
//         template: `

//         <div class="card mb-3" style="width: 30rem">
//   <img class="card-img-top" src="quesadillas.jpg" alt="{{recipeDetails.label}}">
//   <div class="card-body">
//     <h5 class="card-title">{{recipeDetails.label}}</h5>
//     <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//     <p class="card-text"><small class="text-muted">Number of Ingredients: {{recipeDetails.ingredients}} </br> Calories: {{recipeDetails.calories}}</small></p>
//     </div>
// </div>
//         <div>
//         <button ng-click="$ctrl.showDetails()">Show Recipe</button>
//         </div>
//         <div ng-show="$ctrl.isShowing">
//         <h3> {{$ctrl.recipe.label}} </h3>
//         </div>`,
//         controller: RecipeDetails,
//         // controller: [function () {
//         //     let ctrl = this;
//         //     ctrl.isShowing = false;

//         //     ctrl.showDetails = () => {
//         //         ctrl.isShowing = !ctrl.isShowing;
//         //     }
//         // }],
//         bindings: {
//             recipe: "<"
//         }

//     })





function RecipeDetails(RecipeService, $q) {
    const ctrl = this;
    ctrl.fetchRecipes = [];
  
    // ctrl.recipeDetails= [];
    // RecipeService.fetchRecipes()
    //   .then((response) => {
  
    //     ctrl.recipeDetails = response;
    //     console.log(response);
    //   });
  
  
    ctrl.recipeDetails = [
      {
        label: "Chicken Quesadilla",
        img: "img.jpg",
        calories: '1000',
        ingredients: "10",
        servings: "5",
      },
    ]
  
  }
  
  
  
  angular.module('RecipeApp').component('recipeDetails', {
    template: `
             <div class="card mb-3 text-center" id="container" style="width: 30rem">
       <img class="card-img-top" ng-src="{{$ctrl.recipe.img}}" alt="{{$ctrl.recipe.label}}">
       <div class="card-body">
         <h5 class="card-title">{{$ctrl.recipe.label}}</h5>
         <p class="card-text"><small class="text-muted">Number of Ingredients: {{$ctrl.recipe.ingredients}} </br> Calories: {{$ctrl.recipe.calories}}</small></p>
         <button class="btn btn-primary" ng-click="callFavorites(recipe)">Add to favorites</button>
         </div>
     </div>
             <div>
             <!-- <button ng-click="$ctrl.showDetails()">Show Recipe</button> --!>
             </div>

      `, 
    controller: RecipeDetails,
    bindings: {
      recipe: '<',
    }
  });
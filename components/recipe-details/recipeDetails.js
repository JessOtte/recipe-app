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
    const count = Number('123,456');
    ctrl.fetchRecipes = [];
  
    // ctrl.recipeDetails= [];
    // RecipeService.fetchRecipes()
    //   .then((response) => {
  
    //     ctrl.recipeDetails = response;
    //     console.log(response);
    //   });
  
  
    ctrl.recipeDetails = {
        label: "Chicken Quesadilla",
        img: "quesadillas.jpg",
        calories: '1000.3543213',
        ingr: "10",
        ingredients: "4",
        ingredientLines: "1 tsp butter, 2 tortilla shells, 1 cup cheese, 1 tsp butter, 2 tortilla shells, 1 cup cheese, 1 tsp butter, 2 tortilla shells, 1 cup cheese, 1 tsp butter, 2 tortilla shells, 1 cup cheese, 1 tsp butter, 2 tortilla shells, 1 cup cheese, 1 tsp butter, 2 tortilla shells, 1 cup cheese, 1 tsp butter, 2 tortilla shells, 1 cup cheese",
        servings: "5",
        url: "https://www.google.com"
      }  
      
  }
  
  
  
  angular.module('RecipeApp').component('recipeDetails', {
    template: `

             <div class="card" style="width: 35rem">

       <img class="card-img-top" ng-src="{{$ctrl.recipeDetails.img}}" alt="{{$ctrl.recipeDetails.label}}">

       <div class="card-body">
       <span id="cancel" value="x">x</span>             

         <h2 class="card-title">{{$ctrl.recipeDetails.label}}</h2>
         <p><small class="text-muted">{{$ctrl.recipeDetails.ingredients}} Ingredients |
         Calories:{{$ctrl.recipeDetails.calories | number:0}}
          </small></p>

         <h4 class="ingredients-title">What You Need</h4>
         <p>{{$ctrl.recipeDetails.ingredientLines}}</p>
         <p class="btn btn-primary"><a href="{{$ctrl.recipeDetails.url}}">Directions</a></p>
         <button class="btn btn-primary" ng-click="$ctrl.callFavorites(recipe)">Add to favorites</button>
         </div>
     </div>

      `, 
    controller: RecipeDetails,
    //  controller: [function () {
    //           let ctrl = this;
    //           ctrl.isShowing = false;
    //           ctrl.showDetails = () => {
    //               ctrl.isShowing = !ctrl.isShowing;
    //           }
    //       }],
    bindings: {
      recipe: '<',
    }
  });
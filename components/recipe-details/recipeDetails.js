function RecipeDetails(RecipeService, $q) {
  const ctrl = this;
  // const count = Number('123,456');
  ctrl.fetchRecipes = [];
  // ctrl.fetchRecipes = [];
  ctrl.fullRecipe = null;
  ctrl.fullRecipe = RecipeService.getDetails();

  ctrl.closeModule = () => {
    ctrl.moduleFlag = false;
    return ctrl.moduleFlag;
  }

 

}

// angular.module('RecipeApp').component('recipeDetails', {
//   template: 
//     `
    
    
//     <div class="card mb-3 text-center detail-module" id="container" style="width: 30rem">
//     <button ng-click="$ctrl.closeModule()">exit</button>
//     <img class="card-img-top" ng-src="{{$ctrl.fullRecipe.img}}" alt="{{$ctrl.fullRecipe.label}}">
//     <div class="card-body">
//     <h5 class="card-title">{{$ctrl.fullRecipe.label}}</h5>
//     <p class="card-text"><small class="text-muted">Number of Ingredients: {{$ctrl.fullRecipe.ingredients}} </br> Calories: {{$ctrl.fullRecipe.calories}}</br>    <div ng-repeat="ingredient in $ctrl.fullRecipe.ingredientLine">{{ingredient}}</div>
//     </small></p>
//     <button class="btn btn-primary" ng-click="callFavorites(fullRecipe)">Add to favorites</button>
//     </div>
//     </div>
//     <div>
//     <!-- <button ng-click="$ctrl.showDetails()">Show Recipe</button> --!>
//     </div>`,
//   controller: RecipeDetails,
//   bindings: {
//     moduleFlag: "="
//   }
// });


/* ******************************* */



  
    // ctrl.recipeDetails= [];
    // RecipeService.fetchRecipes()
    //   .then((response) => {
  
    //     ctrl.recipeDetails = response;
    //     console.log(response);
    //   });
  
  
    // ctrl.recipeDetails = {
    //     label: "Chicken Quesadilla",
    //     img: "quesadillas.jpg",
    //     calories: '1000.3543213',
    //     ingr: "10",
    //     ingredients: "4",
    //     ingredientLines: "1 tsp butter, 2 tortilla shells, 1 cup cheese, 1 tsp butter, 2 tortilla shells, 1 cup cheese, 1 tsp butter, 2 tortilla shells, 1 cup cheese, 1 tsp butter, 2 tortilla shells, 1 cup cheese, 1 tsp butter, 2 tortilla shells, 1 cup cheese, 1 tsp butter, 2 tortilla shells, 1 cup cheese, 1 tsp butter, 2 tortilla shells, 1 cup cheese",
    //     servings: "5",
    //     url: "https://www.google.com"
    //   }  
      

  // }
  
  
  
  angular.module('RecipeApp').component('recipeDetails', {
    // template: `

    //          <div class="card" style="width: 35rem">

    //    <img class="card-img-top" ng-src="{{$ctrl.recipeDetails.img}}" alt="{{$ctrl.recipeDetails.label}}">

    //    <div class="card-body">
    //    <span id="cancel" value="x">x</span>             

    //      <h2 class="card-title">{{$ctrl.recipeDetails.label}}</h2>
    //      <p><small class="text-muted">{{$ctrl.recipeDetails.ingredients}} Ingredients |
    //      Calories:{{$ctrl.recipeDetails.calories | number:0}}
    //       </small></p>

    //      <h4 class="ingredients-title">What You Need</h4>
    //      <p>{{$ctrl.recipeDetails.ingredientLines}}</p>
    //      <p class="btn btn-primary"><a href="{{$ctrl.recipeDetails.url}}">Directions</a></p>
    //      <button class="btn btn-primary" ng-click="$ctrl.callFavorites(recipe)">Add to favorites</button>
    //      </div>
    //  </div>

    //   `, 
    template: `

             <div class="card detail-module" style="width: 35rem">

       <img class="card-img-top" ng-src="{{$ctrl.fullRecipe.img}}" alt="{{$ctrl.fullRecipe.label}}">

       <div class="card-body">
       <span id="cancel" value="x">x</span>             

         <h2 class="card-title">{{$ctrl.fullRecipe.label}}</h2>
         <p><small class="text-muted">{{$ctrl.fullRecipe.ingredients}} Ingredients |
         Calories:{{$ctrl.fullRecipe.calories | number:0}}
          </small>
          </p>

         <h4 class="ingredients-title">What You Need</h4>
         <p>
         <div ng-repeat="ingredient in $ctrl.fullRecipe.ingredientLine">{{ingredient}}</div>
         </p>
         <p class="btn btn-primary"><a href="{{$ctrl.fullRecipe.url}}">Directions</a></p>
         <button class="btn btn-primary" ng-click="$ctrl.callFavorites(recipe)">Add to favorites</button>
         </div>
     </div>

      `, 
    controller: RecipeDetails,
    bindings: {
      moduleFlag: '=',
    }
  });

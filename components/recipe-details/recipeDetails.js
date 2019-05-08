function RecipeDetails(RecipeService, $q) {
  const ctrl = this;
  // ctrl.fetchRecipes = [];
  ctrl.fullRecipe = null;
  ctrl.fullRecipe = RecipeService.getDetails();

  // ctrl.recipeDetails = [
  //   {
  //     label: "Chicken Quesadilla",
  //     img: "img.jpg",
  //     calories: '1000',
  //     ingredients: "10",
  //     servings: "5",
  //   },
  // ]

  ctrl.closeModule = () => {
    ctrl.moduleFlag = false;
    return ctrl.moduleFlag;
  }

 

}

angular.module('RecipeApp').component('recipeDetails', {
  template: 
    `
    
    
    <div class="card mb-3 text-center detail-module" id="container" style="width: 30rem">
    <button ng-click="$ctrl.closeModule()">exit</button>
    <img class="card-img-top" ng-src="{{$ctrl.fullRecipe.img}}" alt="{{$ctrl.fullRecipe.label}}">
    <div class="card-body">
    <h5 class="card-title">{{$ctrl.fullRecipe.label}}</h5>
    <p class="card-text"><small class="text-muted">Number of Ingredients: {{$ctrl.fullRecipe.ingredients}} </br> Calories: {{$ctrl.fullRecipe.calories}}</br>    <div ng-repeat="ingredient in $ctrl.fullRecipe.ingredientLine">{{ingredient}}</div>
    </small></p>
    <button class="btn btn-primary" ng-click="callFavorites(fullRecipe)">Add to favorites</button>
    </div>
    </div>
    <div>
    <!-- <button ng-click="$ctrl.showDetails()">Show Recipe</button> --!>
    </div>`,
  controller: RecipeDetails,
  bindings: {
    moduleFlag: "="
  }
});
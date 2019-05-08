function RecipeList(RecipeService, $q) {
  const ctrl = this;

  ctrl.recipeList = [];
  ctrl.favoritesList = [];

  ctrl.callSearch = (search, time, meal, health) => {
    RecipeService.fetchRecipes(search, time, meal, health)
      .then((response) => {
        let recipeData = response;
        console.log(recipeData);

        recipeData.forEach(function (child, index) {
          let recipeObj = {
            label: child.recipe.label,
            img: child.recipe.image,
            calories: child.recipe.calories,
            ingredients: child.recipe.ingredients.length,
            servings: child.recipe.yield,
            bookmark: child.bookmarked,
            ingredientLines: child.recipe.ingredientLines.length
          }
          ctrl.recipeList.push(recipeObj);
        })
      });

  }

  ctrl.callFavorites = (favoriteRecipe) => {
    // RecipeService.setFavorites(favoriteRecipe);
    // ctrl.favoritesList.push(favoriteRecipe);
    // console.log(ctrl.favoritesList);
    // return ctrl.favoritesList;
    RecipeService.setFavorites(favoriteRecipe);
    console.log(favoriteRecipe);
  }



}

angular.module('RecipeApp')
  .component('recipeList', {
    template: `
<search-criteria get-list="$ctrl.callSearch(search, time, meal, health)"></search-criteria>
<div class="card-deck text-center" id="container">
<div ng-repeat="recipe in $ctrl.recipeList" class="card mb-4">
<div ng-class="row|($index % 3 == 0)">
<img class="card-img-top" ng-src="{{recipe.img}}" alt="{{recipe.label}}">
<div class="card-body">
<h5 class="card-title">{{recipe.label}}</h5>

<p class="card-text"><small class="text-muted">{{recipe.ingredients}} Ingredients | Calories: 
<span class="cardParams">{{recipe.calories | number:0}}</span>
</small></p>
<button class="btn btn-primary" ng-click="$ctrl.callRecipeDetails(recipe)">Recipe Details</button>
<button class="btn btn-primary" ng-click="$ctrl.callFavorites(recipe)">Add to favorites</button>
</div>
</div>


`, // or use templateUrl
    controller: RecipeList,


  });
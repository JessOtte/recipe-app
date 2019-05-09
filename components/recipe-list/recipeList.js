function RecipeList(RecipeService, $q) {
  const ctrl = this;

  ctrl.showDetailModule = false;

  ctrl.recipeData = null;
  ctrl.recipeList = [];
  ctrl.favoritesList = [];

  ctrl.callSearch = (search, time, calories, health) => {
    RecipeService.fetchRecipes(search, time, calories, health)
      .then((response) => {
        console.log(response);
        let recipeData = response;
        console.log(recipeData);

        recipeData.forEach(function (child, index) {
          let recipeObj = {
            label: child.recipe.label,
            img: child.recipe.image,
            calories: child.recipe.calories,
            ingredients: child.recipe.ingredients.length,
            ingredientLine: child.recipe.ingredientLines,
            servings: child.recipe.yield,
            bookmark: child.bookmarked,
            ingredientLines: child.recipe.ingredientLines.length
          }
          ctrl.recipeList.push(recipeObj);
        })
      });

  }

  ctrl.callFavorites = (favoriteRecipe) => {
    RecipeService.setFavorites(favoriteRecipe);
  }

  ctrl.callRecipeDetails = (recipe) => {
    ctrl.showDetailModule = true;
    RecipeService.setDetails(recipe)
  }

}

angular.module('RecipeApp')
  .component('recipeList', {
    template: `

    <div ng-if="$ctrl.showDetailModule" class="show">
    <recipe-details module-flag="$ctrl.showDetailModule"></recipe-details>
    </div>

<section id="recipe-list">
<search-criteria get-list="$ctrl.callSearch(search, time, calories, health)"></search-criteria>

<div class="container-list">
<div ng-repeat="recipe in $ctrl.recipeList" class="card mb-4">
<div class="card-deck text-center" id="container">
<div ng-class="row">
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
</div>
</section>
`, // or use templateUrl
    controller: RecipeList,


  });
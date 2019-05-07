function RecipeList(RecipeService, $q) {
  const ctrl = this;

  ctrl.recipeList = [];
  ctrl.favoritesList = [];

  ctrl.callSearch = (search, time, meal, health) => {
    RecipeService.fetchRecipes(search, time, meal, health)
      .then((response) => {
        console.log(response);
        let recipeData = response;
        recipeData.forEach(function (child, index) {
          let recipeObj = {
            label: child.recipe.label,
            img: child.recipe.image,
            calories: child.recipe.calories,
            ingredients: child.recipe.ingredients.length,
            servings: child.recipe.yield,
            bookmark: child.bookmarked
          }
          ctrl.recipeList.push(recipeObj);
        })
      });

  }

  ctrl.callFavorites = (favoriteRecipe) => {
    // RecipeService.setFavorites(favoriteRecipe);
    ctrl.favoritesList.push(favoriteRecipe);
    console.log(ctrl.favoritesList);
    return ctrl.favoritesList;
  }



}

angular.module('RecipeApp')
  .component('recipeList', {
    template: `
<section id="recipe-list">
<search-criteria get-list="$ctrl.callSearch(search, time, meal, health)"></search-criteria>
<div class="card-deck text-center" id="container">
<div ng-repeat="recipe in $ctrl.recipeList" class="card">
<img class="card-img-top" src="quesadillas.jpg" alt="{{recipe.label}}">
<div class="card-body">
<h5 class="card-title">{{recipe.label}}</h5>
<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
<p class="card-text"><small class="text-muted">Number of Ingredients: {{recipe.ingredients}} </br> Calories: {{recipe.calories}}</small></p>
<a href="#" class="btn btn-primary">See Recipe</a>
<button ng-click="$ctrl.callFavorites(recipe)">Add to favorite</button>
</div>
</div>
</section>


`, // or use templateUrl
    controller: RecipeList,


  });



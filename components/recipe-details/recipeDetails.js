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

  angular.module('RecipeApp').component('recipeDetails', {
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

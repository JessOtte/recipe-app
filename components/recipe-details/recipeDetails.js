function RecipeDetails(RecipeService, $q) {
  const ctrl = this;
  // const count = Number('123,456');
  ctrl.fetchRecipes = [];
  // ctrl.fetchRecipes = [];
  ctrl.fullRecipe = null;
  ctrl.fullRecipe = RecipeService.getDetails();
  console.log(ctrl.fullRecipe);

  ctrl.closeModule = () => {
    ctrl.moduleFlag = false;
    return ctrl.moduleFlag;
  }

 

  ctrl.callFavorites = (favoriteRecipe) => {
    RecipeService.setFavorites(favoriteRecipe);
  }
 console.log(ctrl.fullRecipe.url);


}

// $('.closeButton').on('click', ()=>{
//   $('#newEntry').hide()
//  });

  angular.module('RecipeApp').component('recipeDetails', {
    template: `
    <div ng-if="$ctrl.showDetailModule" class="window"></div>
    <div ng-if="$ctrl.showDetailModule" class="show">
    <recipe-details module-flag="$ctrl.showDetailModule"></recipe-details>
    </div>
             <div class="card" id="detail-module" style="width: 40vw">


       <div id="module-body" class="card-body">
       <div class="module-title-bar">
       <a class="closeButton" id="cancel" ng-click="$ctrl.closeModule()">X</a>           

         <h2 id="module-title" id="class="card-title">{{$ctrl.fullRecipe.label}}</h2>
         <p><small class="text-muted">{{$ctrl.fullRecipe.ingredients}} Ingredients |
         Calories: {{$ctrl.fullRecipe.calories | number:0}}
         </div>

<!-- REMOVE
       <span id="cancel" value="x" ng-click="$ctrl.closeModule()">x</span>             

         <h2 class="card-title">{{$ctrl.fullRecipe.label}}</h2>
         <p><small class="text-muted">{{$ctrl.fullRecipe.ingredients}} Ingredients |
         Calories:{{$ctrl.fullRecipe.diet | number:0}}
-->

          </small> 
          </p>
          <img class="card-img-top" ng-src="{{$ctrl.fullRecipe.img}}" alt="{{$ctrl.fullRecipe.label}}">

         <h4 class="ingredients-title">What You Need</h4>
         <p>
         <div ng-repeat="ingredient in $ctrl.fullRecipe.ingredientLine">{{ingredient}}</div>
         </p>
         <p class="btn btn-primary"><a href="{{$ctrl.fullRecipe.url}}">Recipe Directions</a></p>
         <button class="btn btn-primary"><a href="https://www.mygrocerydeals.com/">Local Deals</a></button>

         </div>
     </div>

      `, 
    controller: RecipeDetails,
    bindings: {
      moduleFlag: '=',
    }
  });

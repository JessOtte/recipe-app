function RecipeList(RecipeService, $q,) {
    const ctrl = this;
  
  ctrl.recipeList = [];

  ctrl.callSearch = (search, time, meal, health) => {
    RecipeService.fetchRecipes(search, time, meal, health)
    .then((response) => {
      let recipeData = response;
      recipeData.forEach(function(child, index) {
        let recipeObj = {
            label: child.recipe.label,
            img: child.recipe.image,
            calories: child.recipe.calories,
            ingredients: child.recipe.ingredients.length,
            servings: child.recipe.yield,
            bookmark: child.bookmarked
        }
        ctrl.recipeList.push(recipeObj);
        console.log(ctrl.recipeList);
    })
  

    });

  }
     
}
  
    angular.module('RecipeApp')
    .component('recipeList', {
      template: `

      <search-criteria get-list="$ctrl.callSearch(search, time, meal, health)"></search-criteria>
      <div class="card-deck" id="container">
      <div ng-repeat="recipe in $ctrl.recipeList" class="card">
        <img class="card-img-top" ng-img={{recipe.img}} alt="{{recipe.label}}">
        <div class="card-body">
          <h5 class="card-title">{{recipe.label}}</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text"><small class="text-muted">{{recipe.ingredients}}</small></p>
        </div>
      </div>
      `, // or use templateUrl
      controller: RecipeList,


  });
  
  
  
  
  
  
  // function RecipeListController(recipeService) {
  //     const ctrl = this;
  //     ctrl.recipesList = [];
    
  //     ctrl.getList = (search) => {
  //       recipeService.getData(search)
  //         .then((recipes) => {
  //           ctrl.recipesList = []
  //           console.log("it worked!!!!!!s")
  //           console.log(recipes)
  
  //           let listFromApi = recipes;
  
  //           listFromApi.forEach(function (spot, index){
  //             let recipeObj = {
  //               label: spot.recipe.label,
  //               img: spot.recipe.image,
  //               calories: spot.recipe.calories,
  //               ingredients: spot.recipe.ingredients.length,
  //               servings: spot.recipe.yield,
  //               bookmark: spot.bookmarked
  //             }
  //             ctrl.recipesList.push(recipeObj);
  //           })
  //         })
  //         .catch((err) => {
  //           console.log("it didnt work")
  //           console.log(err);
  //         });
  //     }
    
      
    
    
  //   }
    
    
  //   angular
  //     .module('RecipeApp')
  //     .component('recipeList', {
  //       template: `
  //       <search-criteria get-list="$ctrl.getList(search)"></search-criteria>
  //       <div class="cardContainer">
  //           <div ng-repeat="recipe in $ctrl.recipesList" class="fullCard">
  //             <div class="imageCard">
  //               <!-- <div class="favorite">
  //                     <i class="material-icons favoriteIcon">favorite_border</i>
  //                     <i class="material-icons favoriteIcon">favorite</i>
  //                 </div> -->
  //               <img class="foodImage" src="{{recipe.img}}" alt="food">
  //             </div>
  //             <div class="informationCard">
  //               <h2 class="cardDefault cardParams cardHeader cardSpacing">{{recipe.label}}</h2>
  //               <div class="cardStats">
  //                 <p class="cardDefault rightBorder">Calories:
  //                   <span class="cardParams">{{recipe.calories}}</span>
  //                 </p>
  //                 <p class="cardDefault">Servings:
  //                   <span class="cardParams">{{recipe.servings}}</span>
  //                 </p>
  //               </div>
  //               <p class="cardDefault cardSpacing">Ingredients Needed:
  //                 <span class="cardParams">7</span>
  //               </p>
  //             </div>
  //         </div>
  //       </div>
  //     `, // or use templateUrl
  //       controller: RecipeListController,
  //       // bindings: {
  //       //   me: '<',
  //       //   onDelete: '&',
  //       //   onUpdate: '&'
  //       // }
  //     });
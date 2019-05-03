function SearchController(RecipeService) {
    const ctrl = this;


    ctrl.onSearch = (search, time, meal, health) => {
        RecipeService.fetchRecipes(search, time, meal, health);

    // ctrl.onSearch = (search) =>{
    //     ctrl.getList({search:search});

    // }

    }};

angular.module("RecipeApp",)
// .service("RecipeService", ["$http", RecipeService])
.component("searchCriteria", {
    template: `
    <input ng-model="userInput" placeholder="Search recipes!"/>
    <select ng-model="time">
        <option></option>
        <option value="30">30 Minutes</option>
        <option value="45">45 Minutes</option>
        <option value="60">60 Minutes</option>
    </select>
    <select ng-model="meal">
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
    </select>
    <select ng-model="health">
        <option value="gluten-free">Gluten Free</option>
        <option value="vegetarian">Vegetarian</option>
        <option value="vegan">Vegan</option>
    </select>
    <button ng-click="$ctrl.onSearch(userInput, time, meal, health)">GO</button>
    
    
    `,
    controller: SearchController
})



// function SearchController(RecipeService) {
//     const ctrl = this;

//     ctrl.getSearch = (search) =>{
//         ctrl.getList({search:search});
//     }
     
//   }
  
// angular.module("RecipeApp",)
// .service("RecipeService", ["$http", RecipeService])
// .component("searchCriteria", {
//     template: `
//          <input ng-model="userInput" placeholder="Search recipes!"/>
//          <select ng-model="time">
//              <option></option>
//              <option value="30">30 Minutes</option>
//              <option value="45">45 Minutes</option>
//              <option value="60">60 Minutes</option>
//          </select>
//          <select ng-model="meal">
//              <option value="breakfast">Breakfast</option>
//              <option value="lunch">Lunch</option>
//              <option value="dinner">Dinner</option>
//          </select>
//          <select ng-model="health">
//              <option value="gluten-free">Gluten Free</option>
//              <option value="vegetarian">Vegetarian</option>
//              <option value="vegan">Vegan</option>
//          </select>
//          <button ng-click="$ctrl.onSearch(userInput, time, meal, health)">GO</button>
//     `, 
//     controller: SearchController,
//     bindings: {
//       getList: '&',
//     //   me: '<',
//     //   onDelete: '&',
//     //   onUpdate: '&'
//     }
// });
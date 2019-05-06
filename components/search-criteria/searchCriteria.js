function SearchController(RecipeService) {
    let $ctrl = this;


    $ctrl.onSearch = (search, time, meal, health) => {
        RecipeService.fetchRecipes(search, time, meal, health);
    }

}

angular.module("RecipeApp")
// .service("RecipeService", ["$http", RecipeService])
.component("searchCriteria", {
    template: `
    <input ng-model="userInput" placeholder="Search recipes!" id="search-box"/>
    <div id="filter">FILTER: 
    <select ng-model="time" class="custom-select" style="width:200px;">
        <option></option>
        <option value="30">30 Minutes</option>
        <option value="45">45 Minutes</option>
        <option value="60">60 Minutes</option>
    </select>

    <select ng-model="meal" class="custom-select" style="width:200px;">
        <option></option>
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
    </select>

    <select ng-model="health" class="custom-select" style="width:200px;">
        <option></option>
        <option value="gluten-free">Gluten Free</option>
        <option value="vegetarian">Vegetarian</option>
        <option value="vegan">Vegan</option>
    </select>
    <button href="#!/recipe-list" ng-click="$ctrl.onSearch(userInput, time, meal, health)">GO</button>
    </div>
    

    
    `,
    controller: SearchController
})

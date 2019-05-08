function SearchController(RecipeService) {
    let ctrl = this;

    ctrl.onSearch = (search, time, calories, health) => {
        // RecipeService.fetchRecipes(search, time, meal, health);
        ctrl.getList({
            search:search,
            time: time,
            calories: calories,
            health: health
          });
    }
}

angular.module("RecipeApp")
// .service("RecipeService", ["$http", RecipeService])
.component("searchCriteria", {
    template: `
    <div class="search-container">
    <div><input ng-model="userInput" placeholder="Search Millennial Meals" id="search-box"/>
    <button class="btn btn-primary" ng-click="$ctrl.onSearch(userInput, time, meal, health)">GO</button>
</div>
    <div id="filter"> 
    <select ng-model="time" class="custom-select" style="width:200px;">
        <option value="" selected="selected">Cook Time</option>
        <option value="30">30 Minutes or Less</option>
        <option value="45">45 Minutes or Less</option>
        <option value="60">60 Minutes or Less</option>
    </select>

    <select ng-model="calories" class="custom-select" style="width:200px;">
        <option value="" selected="selected">Calorie Count</option>
        <option value="200">200</option>
        <option value="500">500</option>
        <option value="1000">1000</option>
    </select>

    <select ng-model="health" class="custom-select" style="width:200px;">
        <option value="" selected="selected">All Health Types</option>
        <option value="gluten-free">Gluten Free</option>
        <option value="vegetarian">Vegetarian</option>
        <option value="vegan">Vegan</option>
    </select>
    </div>

</div>

    
    `,
    controller: SearchController,
    bindings: {
        getList: '&'
    }
})

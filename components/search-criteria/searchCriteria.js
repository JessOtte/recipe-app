function SearchController(RecipeService) {
    let ctrl = this;

    ctrl.onSearch = (search, time, meal, health) => {
        // RecipeService.fetchRecipes(search, time, meal, health);
        ctrl.getList({
            search:search,
            time: time,
            meal: meal,
            health: health
          });

        // ctrl.userSearch = {
        //     search: search,
        //     time: time,
        //     meal: meal,
        //     health, health
        // }
    }
}

angular.module("RecipeApp")
// .service("RecipeService", ["$http", RecipeService])
.component("searchCriteria", {
    template: `
    <div class="search-container">
    <input ng-model="userInput" placeholder="Search Millennial Meals" id="search-box"/>
    <div id="filter"> 
    <select ng-model="time" class="custom-select" style="width:200px;">
        <option value="" selected="selected">No Time Frame</option>
        <option value="30">30 Minutes</option>
        <option value="45">45 Minutes</option>
        <option value="60">60 Minutes</option>
    </select>

    <select ng-model="meal" class="custom-select" style="width:200px;">
        <option value="" selected="selected">All Meal Types</option>
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
    </select>

    <select ng-model="health" class="custom-select" style="width:200px;">
        <option value="" selected="selected">All Health Types</option>
        <option value="gluten-free">Gluten Free</option>
        <option value="vegetarian">Vegetarian</option>
        <option value="vegan">Vegan</option>
    </select>
    <button class="btn btn-primary" ng-click="$ctrl.onSearch(userInput, time, meal, health)">GO</button>
    </div>
</div>
    
    `,
    controller: SearchController,
    bindings: {
        getList: '&'
    }
})

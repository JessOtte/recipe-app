function SearchController(RecipeService) {
    let ctrl = this;

    ctrl.onSearch = (search, time, diet, health) => {
        // RecipeService.fetchRecipes(search, time, meal, health);
        ctrl.getList({
            search:search,
            time: time,
            diet: diet,
            health: health
          });
    }
}

angular.module("RecipeApp")
// .service("RecipeService", ["$http", RecipeService])
.component("searchCriteria", {
    template: `
<section class="hero-image">
    <div class="search-container">



<!--jessa-->
    <div class="search"><input ng-model="userInput" placeholder="Search Millennial Meals" id="search-box"/>
    <button class="btn btn-primary go" ng-click="$ctrl.onSearch(userInput, time, meal, health)">GO</button>
<!--jessa-->


</div>
    <div id="filter"> 
    <select ng-model="time" class="custom-select" style="width:200px;">
        <option value="" selected="selected">Cook Time</option>
        <option value="30">30 Minutes or Less</option>
        <option value="45">45 Minutes or Less</option>
        <option value="60">60 Minutes or Less</option>
    </select>

    <select ng-model="diet" class="custom-select" style="width:200px;">
        <option value="" selected="selected">Diet Type</option>
        <option value="balanced">Balanced</option>
        <option value="low-carb">Low Carb</option>
        <option value="low-fat">Low Fat</option>
    </select>

    <select ng-model="health" class="custom-select" style="width:200px;">
        <option value="" selected="selected">Diet Restrictions</option>
        <option value="peanut-free">Peanut Free</option>
        <option value="vegetarian">Vegetarian</option>
        <option value="vegan">Vegan</option>
    </select>
    </div>

</div>
</section>
    
    `,
    controller: SearchController,
    bindings: {
        getList: '&'
    }
})

function SearchController(RecipeService) {

    RecipeService.fetchRecipes();

}

angular.module("RecipeApp",)
// .service("RecipeService", ["$http", RecipeService])
.component("searchCriteria", {
    template: ``,
    controller: SearchController
})

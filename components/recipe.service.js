function RecipeService($http) {
    const service = this;
    service.APP_KEY = "347156a4086f1d41a3e7afec3aa99d76";
    service.APP_ID = "130a79d6"


    service.fetchRecipes = () => {
        $http.get(`https://api.edamam.com/search?q=chicken&app_id=${service.APP_ID}&app_key=${service.APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`)
            .then((response) => {
                console.log(response);
            })
    }

}

angular
    .module("RecipeApp")
    .service("RecipeService", ["$http", RecipeService]);

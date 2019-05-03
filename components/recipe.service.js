function RecipeService($http, $q) {
    const service = this;
    service.APP_KEY = "347156a4086f1d41a3e7afec3aa99d76";
    service.APP_ID = "130a79d6";
    service.input = null;
    service.health = null;
    service.time = null;
    service.dish= null;
    console.log(service.input);



    service.fetchRecipes = (searchInput, health, time ) => {

        return $q(function(resolve, reject) {
            service.input = searchInput;

            $http({
                url: `https://api.edamam.com/search`,
                method: `GET`,
                params: {
                    q: service.input,
                    app_id: service.APP_ID,
                    app_key: service.APP_KEY,
                    Health: service.health,
                    DishType: service.dishType,
                    time: service.time
                }
            })
            .then((response) => {
                    console.log(response);
                    return [service.input, service.health, service.time,service.dish];
                    
                })
            .catch((error) => {
                console.log(error);
            })



        })


    }


}

angular
    .module("RecipeApp")
    .service("RecipeService", ["$http", "$q", RecipeService]);
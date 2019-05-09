function RecipeService($http, $q) {
    const service = this;
    service.favoriteList = [];
    // service.favoriteData = null;
    service.recipeDetails = null;

    //jessa creds
    // service.APP_KEY = "347156a4086f1d41a3e7afec3aa99d76";
    // service.APP_ID = "130a79d6";

    // // alex creds - backup credentials
    service.APP_KEY = "8bba960e00b73d0a7da5daaa650988e3	";
    service.APP_ID = "c027a9cd";

    service.input = null;
    service.health = null;
    service.time = null;
    // service.dish= null;
    service.recipeList = [];
    service.fetchRecipes = (search, time, calories, health) => {


        return $q(function (resolve, reject) {
            service.input = search;
            service.health = health;
            service.time = time;
            service.meal = calories;
            $http({
                url: `https://api.edamam.com/search`,
                method: `GET`,
                params: {
                    q: service.input,
                    app_id: service.APP_ID,
                    app_key: service.APP_KEY,
                    health: service.health,
                    calories: service.calories,
                    time: service.time,
                    to: 15

                }
            })
                .then((response) => {
                    let data = response.data.hits;
                    resolve(data);
                })
                .catch((error) => {
                    reject(error);
                })
        })
    }

    service.setFavorites = (recipe) => {
            if ( !service.isInFavorites(recipe) )
            service.favoriteList.push(recipe);
    }

    service.isInFavorites = (recipe) => {
        let isInFavorites = false;

        service.favoriteList.forEach( (favorite)=> {
            if ( recipe.url === favorite.url ) {
                isInFavorites = true;
            }
        })

        return isInFavorites;
    }

    service.getFavorites = () => {
        return service.favoriteList;
    }

    service.setDetails = (recipe) => {
        service.recipeDetails = recipe;
    }

    service.getDetails = () => {
        return service.recipeDetails;
    }



}

angular
    .module("RecipeApp")
    .service("RecipeService", ["$http", "$q", RecipeService]);

function RecipeService($http, $q) {
    const service = this;

    //jessa creds
    // service.APP_KEY = "347156a4086f1d41a3e7afec3aa99d76";
    // service.APP_ID = "130a79d6";

    //my creds
    service.APP_KEY = "8bba960e00b73d0a7da5daaa650988e3	";
    service.APP_ID = "c027a9cd";

    service.input = null;
    service.health = null;
    service.time = null;
    service.dish= null;
    // service.dataList = [];
    service.recipeList = [];
    



    service.fetchRecipes = (searchInput, time, meal, health ) => {

        return $q(function(resolve, reject) {
            service.input = searchInput;
            service.health = health;
            service.time = time;
            service.meal = meal;


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
                let data = response.data.hits;
                // console.log(data);

                async function someFunc() {
                    data.forEach(function(child, index) {
                        let recipeObj = {
                            label: child.recipe.label,
                            img: child.recipe.image,
                            calories: child.recipe.calories,
                            ingredients: child.recipe.ingredients.length,
                            servings: child.recipe.yield,
                            bookmark: child.bookmarked
                        }
                        service.recipeList.push(recipeObj);


                    })
                    await service.recipeList;
                }
                resolve(service.recipeList);








                //     data.forEach(function(child, index) {
                //     let recipeObj = {
                //         label: child.recipe.label,
                //         img: child.recipe.image,
                //         calories: child.recipe.calories,
                //         ingredients: child.recipe.ingredients.length,
                //         servings: child.recipe.yield,
                //         bookmark: child.bookmarked
                //     }
                //     service.recipeList.push(recipeObj);
                // })
                // console.log(`object: ${service.recipeList[0].label}`);



                    // return [service.input, service.health, service.time,service.dish];
                    // console.log(service.recipeList);

                    
                })
            .catch((error) => {
                reject(error);
            })


        })


    }

}

angular
    .module("RecipeApp")
    .service("RecipeService", ["$http", "$q", RecipeService]);

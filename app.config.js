"use strict";
angular
    .module("RecipeApp")
    // Configuring the routing
    // The config method must have an array as the parameter. The array contains two elements, $routeProvider (as a string) and an arrow function with $routeProvider as a parameter
    .config(["$routeProvider", ($routeProvider) => {
        $routeProvider
            // When the user visits the display route...
            .when("/favorites-page", {
                // Load the display component
                template: "<favorites-page></favorites-page>"
            })
            .when("/search-criteria", {
            //     // Load the display component
            template: "<search-criteria></search-criteria>"
            })
            // .otherwise({ redirectTo: "/search-criteria" });
    }]);

"use strict";
angular
    .module("RecipeApp")
    // Configuring the routing
    // The config method must have an array as the parameter. The array contains two elements, $routeProvider (as a string) and an arrow function with $routeProvider as a parameter
    .config(["$routeProvider", ($routeProvider) => {
        $routeProvider
            // When the user visits the display route...
            .when("/home", {
                // Load the display component
                // template: "<home></home>"
            })
            .when("/about-me", {
                // Load the display component
                // template: "<about-me></about-me>"
            })
            .when("/portfolio", {
                // Load the display component
                // template: "<portfolio></portfolio>"
            })
            .when("/resume", {
                // Load the display component
                // template: "<resume></resume>"
            })
            .otherwise({ redirectTo: "/home" });
    }]);

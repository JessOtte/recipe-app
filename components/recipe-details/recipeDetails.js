angular
    .module("RecipeApp")
    .component("recipeDetails", {
        controller: [function () {
            let ctrl = this;
            ctrl.isShowing = false;

            ctrl.showDetails = () => {
                ctrl.isShowing = !ctrl.isShowing;
            }
        }],
        template: `
        <div>
        <button ng-click="$ctrl.showDetails()">Show Recipe</button>
        </div>
        <div ng-show="$ctrl.isShowing">
        <h3> {{$ctrl.recipe.label}} </h3>
        </div>`,
        bindings: {
            recipe: "<"
        }

    })
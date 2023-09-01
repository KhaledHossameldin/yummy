let ingredients = [];

function viewMeals(index) {
    sessionStorage.removeItem('category');
    sessionStorage.removeItem('area');
    sessionStorage.setItem('ingredient', ingredients[index].name);
    open('./filtered.html', '_self');
}

$(document).ready(function () {
    fetchIngredients().then(function (value) {
        $('div#loading-overlay').fadeOut(500);
        console.log(value);
        ingredients = value;
        for (let i = 0; i < ingredients.length; i++) {
            $('div#ingredients-content').append(ingredients[i].buildElement(i));
        }
    });
});
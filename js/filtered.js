let meals = [];
const category = sessionStorage.getItem('category');
const area = sessionStorage.getItem('area');
const ingredient = sessionStorage.getItem('ingredient');

function viewMealDetails(index) {
    sessionStorage.setItem('meal', meals[index].id);
    open('./meal_details.html', '_self');
}

$(document).ready(function () {
    closeSideNavbar();
    fetchMeals('', category, area, ingredient).then(function (value) {
        $('div#loading-overlay').fadeOut(500);
        meals = value;
        for (let i = 0; i < meals.length; i++) {
            $('div#meals-content').append(meals[i].buildElement(i));
        }
    });
});
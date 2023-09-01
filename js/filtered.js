let meals = [];
const category = sessionStorage.getItem('category');
const area = sessionStorage.getItem('area');
const ingredient = sessionStorage.getItem('ingredient');

function viewMealDetails(index) {
    sessionStorage.setItem('meal', meals[index].id);
    open('./meal_details.html', '_self');
}

$(document).ready(function () {
    fetchMeals('', category, area, ingredient).then(function (value) {
        meals = value;
        for (let i = 0; i < meals.length; i++) {
            $('div#meals-content').append(meals[i].buildElement(i));
        }
        hideLoading();
    });
});
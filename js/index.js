let meals = [];

function viewMealDetails(index) {
    sessionStorage.setItem('meal', meals[index].id);
    open('./html/meal_details.html', '_self');
}

$(document).ready(function () {
    closeSideNavbar();
    fetchMeals().then(function (value) {
        meals = value;
        for (let i = 0; i < meals.length; i++) {
            $('div#meals-content').append(meals[i].buildElement(i));
        }
        hideLoading();
    });
});
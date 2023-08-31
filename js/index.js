let meals = [];

function viewMealDetails(index) {
    sessionStorage.setItem('meal', JSON.stringify(meals[index]));
    open('./html/meal_details.html', '_self');
}

$(document).ready(function () {
    closeSideNavbar();
    fetchMeals().then(function (value) {
        $('div#loading-overlay').fadeOut(500);
        meals = value;
        for (let i = 0; i < meals.length; i++) {
            $('div#meals-content').append(meals[i].buildElement(i));
        }
    });
});
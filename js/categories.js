let categories = [];

function viewMeals(index) {
    sessionStorage.setItem('category', categories[index].name);
    sessionStorage.removeItem('area');
    sessionStorage.removeItem('ingredient');
    open('./filtered.html', '_self');
}

$(document).ready(function () {
    fetchCategories().then(function (value) {
        categories = value;
        for (let i = 0; i < categories.length; i++) {
            $('div#categories-content').append(categories[i].buildElement(i));
        }
        hideLoading();
    });
});
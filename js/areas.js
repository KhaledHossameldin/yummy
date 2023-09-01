let areas = [];

function viewMeals(index) {
    sessionStorage.removeItem('category');
    sessionStorage.setItem('area', areas[index]);
    sessionStorage.removeItem('ingredient');
    open('./filtered.html', '_self');
}

$(document).ready(function () {
    getData(areasUrl).then(function (value) {
        areas = value.meals.map(value => value.strArea);
        for (let i = 0; i < areas.length; i++) {
            $('div#areas-content').append(
                `<div onClick="viewMeals(${i})" class="col-lg-3 col-md-4 col-sm-6">
                    <div class="text-white text-center cursor-pointer">
                        <i class="fa-solid fa-house-laptop fa-4x"></i>
                        <h3>${areas[i]}</h3>
                    </div>
                </div>
            `);
        }
        hideLoading();
    });
});
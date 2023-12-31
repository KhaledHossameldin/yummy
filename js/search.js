let meals = [];

function viewMealDetails(index) {
    sessionStorage.setItem('meal', meals[index].id);
    open('./meal_details.html', '_self');
}

$('input#name-input').on('input', function () {
    $('div#meals-content').html(`
        <div id="loading-overlay"
            class="bg-black position-absolute top-0 start-0 bottom-0 end-0 z-3 justify-content-center align-items-center text-white vh-100">
            <i class="fa-solid fa-spinner fa-spin fa-5x"></i>
        </div>
    `);
    $('div#loading-overlay').fadeIn(500).css({ display: 'flex' });
    fetchMeals(this.value).then(function (value) {
        $('div#loading-overlay').fadeOut(500);
        meals = value;
        for (let i = 0; i < meals.length; i++) {
            $('div#meals-content').append(meals[i].buildElement(i));
        }
    });
});

$('input#first-letter-input').on('input', function () {
    $('div#meals-content').html(`
        <div id="loading-overlay"
            class="bg-black position-absolute top-0 start-0 bottom-0 end-0 z-3 justify-content-center align-items-center text-white vh-100">
            <i class="fa-solid fa-spinner fa-spin fa-5x"></i>
        </div>
    `);
    $('div#loading-overlay').fadeIn(500).css({ display: 'flex' });
    if (this.value != '') {
        fetchByFirstLetter(this.value).then(function (value) {
            $('div#loading-overlay').fadeOut(500);
            meals = value;
            for (let i = 0; i < meals.length; i++) {
                $('div#meals-content').append(meals[i].buildElement(i));
            }
        });
        return;
    }
    fetchMeals('').then(function (value) {
        $('div#loading-overlay').fadeOut(500);
        meals = value;
        for (let i = 0; i < meals.length; i++) {
            $('div#meals-content').append(meals[i].buildElement(i));
        }
    });
});

$(document).ready(_ => closeSideNavbar());
const baseUrl = 'https://www.themealdb.com/api/json/v1/1/';
const searchUrl = 'search.php?s=';
const firstLetterUrl = 'search.php?f=';

async function fetchMeals(search = '') {
    const response = await fetch(`${baseUrl}${searchUrl}${search}`);
    const data = await response.json();
    return data.meals.map((value) => new Meal(value));
}

async function fetchByFirstLetter(search) {
    const response = await fetch(`${baseUrl}${firstLetterUrl}${search}`);
    const data = await response.json();
    return data.meals.map((value) => new Meal(value));
}
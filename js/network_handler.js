const baseUrl = 'https://www.themealdb.com/api/json/v1/1/';
const searchUrl = 'search.php?s=';

async function fetchMeals(search = '') {
    const response = await fetch(`${baseUrl}${searchUrl}${search}`);
    const data = await response.json();
    return data.meals.map((value) => new Meal(value));
}
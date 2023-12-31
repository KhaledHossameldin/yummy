const baseUrl = 'https://www.themealdb.com/api/json/v1/1/';
const searchUrl = 'search.php?s=';
const mealDetailsUrl = 'lookup.php?i=';
const firstLetterUrl = 'search.php?f=';
const categoriesUrl = 'categories.php';
const areasUrl = 'list.php?a=list';
const ingredientsUrl = 'list.php?i=list';
const filterByCategoryUrl = 'filter.php?c=';
const filterByAreaUrl = 'filter.php?a=';
const filterByIngredientUrl = 'filter.php?i=';

async function fetchMeals(search = '', category = null, area = null, ingredient = null) {
    let data;
    if (category != null) {
        data = await getData(`${filterByCategoryUrl}${category}`);
    } else if (area != null) {
        data = await getData(`${filterByAreaUrl}${area}`);
    } else if (ingredient != null) {
        data = await getData(`${filterByIngredientUrl}${ingredient}`);
    } else {
        data = await getData(`${searchUrl}${search}`);
    }
    if (data.meals == null) {
        data.meals = [];
    } else if (category != null || area != null || ingredient != null) {
        data.meals = data.meals.slice(0, 20);
    }
    return data.meals.map((value) => new Meal(value));
}

async function fetchMealDetails(id) {
    const data = await getData(`${mealDetailsUrl}${id}`);
    return new Meal(data.meals[0]);
}

async function fetchByFirstLetter(search) {
    const data = await getData(`${firstLetterUrl}${search}`);
    return data.meals.map((value) => new Meal(value));
}

async function fetchCategories() {
    const data = await getData(categoriesUrl);
    return data.categories.slice(0, 20).map((value) => new Category(value));
}

async function fetchIngredients() {
    const data = await getData(ingredientsUrl);
    return data.meals.slice(0, 20).map((value) => new Ingredient(value));
}

async function getData(url) {
    const response = await fetch(`${baseUrl}${url}`);
    const data = await response.json();
    return data;
}
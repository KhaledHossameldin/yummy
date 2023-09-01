class Meal {
    constructor(meal) {
        this.id = meal.idMeal;
        this.image = meal.strMealThumb;
        this.name = meal.strMeal;
        this.instructions = meal.strInstructions;
        this.area = meal.strArea;
        this.category = meal.strCategory;
        this.tags = meal.strTags != null ? meal.strTags.split(',') : [];
        this.source = meal.strSource;
        this.youtube = meal.strYoutube;
        this.ingredients = [];
        for (let i = 1; i <= 20; i++) {
            if (meal[`strIngredient${i}`] == '') {
                break;
            }
            this.ingredients.push(meal[`strMeasure${i}`] + ' ' + meal[`strIngredient${i}`]);
        }
    }

    buildElement(index) {
        return `
            <div onClick="viewMealDetails(${index})" class="col-lg-3 col-md-4 col-sm-6">
                <div class="overflow-hidden rounded position-relative meal-item cursor-pointer">
                    <img src="${this.image}" class="img-fluid" />
                    <div class="position-absolute top-0 start-0 bottom-0 end-0 bg-white bg-opacity-75 d-flex align-items-center overflow-hidden">
                        <h3 class="ms-2 mb-0">${this.name}</h3>
                    </div>
                </div>
            </div>
        `;
    };
}

class Category {
    constructor(category) {
        this.name = category.strCategory;
        this.image = category.strCategoryThumb;
        this.description = category.strCategoryDescription.split(" ").slice(0,20).join(" ");
    }

    buildElement(index) {
        return `
            <div onClick="viewMeals(${index})" class="col-lg-3 col-md-4 col-sm-6">
                <div class="rounded position-relative cursor-pointer category-item overflow-hidden">
                    <img src="${this.image}" class="img-fluid rounded" />
                    <div class="position-absolute top-0 start-0 bottom-0 end-0 bg-white bg-opacity-75 rounded text-center">
                        <h3>${this.name}</h3>
                        <p>${this.description}</p>
                    </div>
                </div>
            </div>
        `;
    };
}
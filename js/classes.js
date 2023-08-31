class Meal {
    constructor(meal) {
        this.image = meal.strMealThumb;
        this.name = meal.strMeal;
        this.instructions = meal.strInstructions;
        this.area = meal.strArea;
        this.category = meal.strCategory;
        this.tag = meal.strTags;
        this.source = meal.strSource;
        this.youtube = meal.strYoutube;
        this.ingredients = [];
        for (let i = 1; i <= 20; i++) {
            if (meal[`strIngredient${i}`] == '') {
                break;
            }
            this.ingredients.push(meal[`strMeasure${i}`].trim() + ' ' + meal[`strIngredient${i}`].trim());
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
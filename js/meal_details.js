const meal = JSON.parse(sessionStorage.getItem('meal'));

$(document).ready(function () {
    closeSideNavbar();
    $(document.body).prepend(`
        <main class="container py-5">
            <div class="row g-4">
                <div class="col-lg-4">
                    <div class="text-white">
                        <img src="${meal.image}" class="img-fluid rounded" />
                        <h2>${meal.name}</h2>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="text-white">
                        <h2>Instructions</h2>
                        <p>${meal.instructions}</p>
                        <h3><span class="fw-bolder">Area: </span>${meal.area}</h3>
                        <h3><span class="fw-bolder">Category: </span>${meal.category}</h3>
                        <h3>Recipes:</h3>
                        <ul class="list-unstyled d-flex g-3 flex-wrap">
                            ${meal.ingredients.map((item) => `<li class="alert alert-info m-2 p-1">${item}</li>`).join('')}
                        </ul>
                        <h3>Tags:</h3>
                        <div class="list-unstyled d-flex g-3 flex-wrap mb-3 ${meal.tag == null ? 'd-none' : ''}">
                            <p class="alert alert-danger m-2 p-1">${meal.tag}</p>
                        </div>
                        <a target="_blank" href="${meal.source}" class="btn btn-success">Source</a>
                        <a target="_blank" href="${meal.youtube}" class="btn btn-danger">Youtube</a>
                    </div>
                </div>
            </div>
        </main>
    `);
});

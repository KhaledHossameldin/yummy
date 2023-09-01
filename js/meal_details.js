const meal = JSON.parse(sessionStorage.getItem('meal'));

$(document).ready(function () {
    fetchMealDetails(meal).then(function (value) {
        $(document.body).prepend(`
            <main class="container py-5">
                <div class="row g-4">
                    <div class="col-lg-4">
                        <div class="text-white">
                            <img src="${value.image}" class="img-fluid rounded" />
                            <h2>${value.name}</h2>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div class="text-white">
                            <h2>Instructions</h2>
                            <p>${value.instructions}</p>
                            <h3><span class="fw-bolder">Area: </span>${value.area}</h3>
                            <h3><span class="fw-bolder">Category: </span>${value.category}</h3>
                            <h3>Recipes:</h3>
                            <ul class="list-unstyled d-flex g-3 flex-wrap">
                                ${value.ingredients.map((item) => `<li class="alert alert-info m-2 p-1">${item}</li>`).join('')}
                            </ul>
                            <h3>Tags:</h3>
                            <ul class="list-unstyled d-flex g-3 flex-wrap">
                                ${value.tags.map((item) => `<li class="alert alert-danger m-2 p-1">${item}</li>`).join('')}
                            </ul>
                            <a target="_blank" href="${value.source}" class="btn btn-success">Source</a>
                            <a target="_blank" href="${value.youtube}" class="btn btn-danger">Youtube</a>
                        </div>
                    </div>
                </div>
            </main>
        `);
        hideLoading();
    });
});

(function () {

    function getRecipeList() {
        fetch('recipesAvailable.json')
            .then(r => {
                if (!r.ok) {
                    throw new Error(`${r.status} ${r.statusText}`)
                }
                return r.json();
            })
            .then(function (theRecipes) {
                theRecipes.forEach((recipe) => {
                    const label = $(`<label>${recipe}</label>`);
                    $('#recipeList').append(`<input type="radio" name="recipeChoice" id="the${recipe}" value="${recipe}">`);
                    $('#recipeList').append(label);
                });

                $('input[name="recipeChoice"]').change(function () {
                    $('.textDisplayer').empty();
                    const theRecipe = $('input[name="recipeChoice"]:checked').val();

                    fetch(`${theRecipe}.json`)
                        .then(r => {
                            if (!r.ok) {
                                throw new Error(`${r.status} ${r.statusText}`);
                            }
                            return r.json();
                        })
                        .then(recipeFile => {
                            console.log(recipeFile);
                            $('.textDisplayer').append(`<div>${recipeFile.name}</div>`);
                            $('.textDisplayer').append(`<div>${recipeFile.ingredients}</div>`)
                            $('.textDisplayer').append(`<div><img src="${recipeFile.img}"></div>`);

                        })
                        .catch((err) => {
                            console.log('oops');
                        });
                });
            })
            .catch((error) => {
                console.log(error, 'oops');
            });



    };
    getRecipeList();


}());
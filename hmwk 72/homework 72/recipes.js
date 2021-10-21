(function () {

    function recipes() {
        fetch('recipesAvailable.json')
            .then(r => {
                if (!r.ok) {
                    throw new Error(`${r.status} ${r.statusText}`);
                }
                return r.json();
            })
            .then(theRecipes => {
                theRecipes.forEach((recipe) => {
                    $('#recipeList').append('<label> ${recipe} </label>');

                });
            })
            .catch((err) => {
                console.log('oops');
            });
    } ();

    $('#optionOneButton').click(() => {
        fetch('brownies.json')
            .then(r => {
                if (!r.ok) {
                    throw new Error(`${r.status} ${r.statusText}`);
                }
                return r.json();
            })
            .then(brownie => {
                $('#theDisplayer'), append(brownie);
            })
            .catch((err) => {
                console.log('oops');
            });
    })
}());
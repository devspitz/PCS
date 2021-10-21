(async function () {
    const theButton = $('#display');
    const theFile = $('#file');


    theButton.on('click', () => {


        fetch(theFile.val())
            .then(r => {
                if (!r.ok) {
                    throw new Error(`${r.status} ${r.statusText}`);
                }
                console.log("working");
                return r.text();
            })
            .then(text => {
                console.log(text);
            })
            .catch(err => console.log('OOPS', err));
    });
}());



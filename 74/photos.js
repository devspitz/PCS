(async function () {

    const results = $('#results');
    const searchbar = $('#search');

    async function loadJson(url) {
        try {
            const response = await fetch(url)
            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
            const result = await response.json();
            return result;
        }
        catch (e) {
            console.log(e.message);
        }
    }
    async function picList() {
        const pictures = await loadJson('kotelResult.json');
        if (pictures) {
            console.log('went into line 22');
            $('#go').click(function () {
                console.log(searchbar.val());

                pictures.items.forEach((pic) => {
                    const thePicture = $(`<img src=${pic.media.m}>`);
                    results.append(`<h1>${pic.title}</h1>`);
                    results.append(thePicture);
                });
            });
        }
    }
    picList();

}());
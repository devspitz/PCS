(async function () {

    const results = $('#results');
    const searchbar = $('#search');
    const carousel = $('.carousel-inner')
    let i = 0;

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
            $('#go').click(function () {
                pictures.items.forEach((pic) => {
                    if (i === 0) {
                        i++;
                        $(`<div class="carousel-item active">
                        <img class="d-block w-100" src=${pic.media.m} alt="First slide">
                   <div class="carousel-caption d-none d-md-block">
                       <h5>${pic.title}</h5>

                     </div>
                        </div>
                    `).appendTo(carousel);
                    } else {
                        $(`<div class="carousel-item">
                        <img class="d-block w-100" src=${pic.media.m} alt="Next slide">
                        <div class="carousel-caption d-none d-md-block">
                       <h5>${pic.title}</h5>  
                     </div>
                    </div>
                    `).appendTo(carousel);
                    }
                });

            });
        }
    }
    picList();
}());
(async function () {
    //'use strict';

    const videoChoices = $('#videoChoices');
    const videoTitle = $('#title');
    const videoPlaying = $('#theVideo');
    const nowPlaying = $('#nowPlaying');
    const pics = $('#pics');


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

    async function videoSelected(videoToPlay) {
        const video = await loadJson(`${videoToPlay}.json`);
        if (video) {
            console.log(video);

            videoTitle.text(video.Title);
            videoPlaying.attr('src', video.video);
            videoPlaying[0].play();
        }
    }

    async function videoList() {
        const videos = await loadJson('videos.json');
        videos.forEach(video => {
            const picture = $(`<img src=${video.img}>`);
            videoChoices.append(`<option value="${video.id}" name="selected">${video.Title}</option>`);
            videoChoices.append(picture);

        });
        $('option[name="selected"]').click(function () {
            videoSelected(this.value);
        });
    }



    videoList();

}());

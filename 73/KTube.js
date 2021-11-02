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
            $('#nowPlaying').css("display", "block");
            videoTitle.text(video.Title);
            videoPlaying.attr('src', video.video);
            //  videoPlaying.attr('hidden', true);
            videoPlaying[0].play();
        }
    }

    async function videoList() {
        $('#nowPlaying').css("display", "none");
        const videos = await loadJson('videos.json');
        videos.forEach(video => {
            $(`<figure class="figure px-2 ">
           <img src=${video.img}  class="rounded mx-auto d-block">
            <option class="figure-caption " value="${video.id}" name="selected">${video.Title}</option>
            </figure>`).appendTo(videoChoices);


        });
        $('option[name="selected"]').click(function () {
            videoSelected(this.value);
        });
    }



    videoList();

}());

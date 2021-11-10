/* global google */
(function () {
    'use strict';
    const searchInput = $('#search');
    const go = $('#go');
    let location = { lat: 41.492353, lng: -81.520224 };

    const map = new google.maps.Map(document.getElementById('map'), {
        center: location,
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    });

    const bounds = new google.maps.LatLngBounds();

    function getMap(longitude, latitude, summary, img, title, link) {

        location = ({ lat: latitude, lng: longitude });

        const infoWindow = new google.maps.InfoWindow({
        });

        const marker = new google.maps.Marker({
            position: location,
            map: map,
            animation: google.maps.Animation.DROP,
            title: title,
            icon: img ? {
                url: img,
                scaledSize: new google.maps.Size(50, 50)
            } : undefined
        });

        marker.addListener('click', () => {
            setTimeout(() => {
                infoWindow.setContent(`
             ${summary}
               <br>
                  <a target="_blank" href="${link}">more info</a>`);
                infoWindow.open(map, marker);
            }, 5000)
        });
    }

    function findingInfo() {

        go.click(() => {
            console.log(`val: ${searchInput.val()}`);
            $.getJSON(`http://api.geonames.org/wikipediaSearch?q=${searchInput.val()}&maxRows=10&username=aim1&type=json`)
                .then(data => {
                    console.log(data)
                    data.geonames.forEach(a => {
                        const longitude = a.lng;
                        const latitude = a.lat;
                        const summary = a.summary;
                        const img = a.thumbnailImg;
                        const title = a.title;
                        const link = a.wikipediaUrl;

                        getMap(longitude, latitude, summary, img, title, link)
                        bounds.extend(location);
                        const listItem = $('#list');
                        $(`
                        <li>
                          <img src=${img} class="img-thumbnail">
                        <h2 id="h2">${title}<h2>
                       <p id="p">${summary}</p>
                       </li>`)
                            .appendTo(listItem)
                            .click(() => {
                                const goToBounds = map.getBounds();
                                goToBounds.extend(location);
                                map.fitBounds(goToBounds);
                            });
                        map.fitBounds(bounds);
                    });
                });
        });
    }
    findingInfo();

}());
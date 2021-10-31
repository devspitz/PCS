/* global google */
(function () {
    'use strict';
    const searchInput = $('#search');
    let location;

    const map = new google.maps.Map(document.getElementById('map'), {
        center: ({ lat: 41.492353, lng: -81.520224 }),
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    });
    const bounds = new google.maps.LatLngBounds();

    /*map.addListener('center_changed', () => {
        const center = map.getCenter();
        console.log('center changed', center.lat(), center.lng());
        map.setPosition(center);
    });*/

    function getMap(longitude, latitude, summary, img, title, link) {

        location = { lat: latitude, lng: longitude };

        const infoWindow = new google.maps.InfoWindow({
        });

        const marker = new google.maps.Marker({
            position: location,
            map: map,
            animation: google.maps.Animation.DROP,
            title: title,
            icon: {
                url: img,
                scaledSize: new google.maps.Size(50, 50)
            }
        });

        marker.addListener('click', () => {
            infoWindow.setContent(`
             ${summary}
               <br>
                  <a target="_blank" href="${link}">more info</a>`);
            infoWindow.open(map, marker);
        });
    }

    function findingInfo() {

        $('#go').click(() => {
            console.log(`val: ${searchInput.val()}`);
            $.getJSON(`http://api.geonames.org/wikipediaSearch?q=${searchInput.val()}&maxRows=10&username=aim1&type=json`)
                .then(data => {
                    console.log(data);
                    map.clearOverlays();

                    data.geonames.forEach(a => {

                        const longitude = a.lng;

                        const latitude = a.lat;
                        const summary = a.summary;
                        const img = a.thumbnailImg;
                        const title = a.title;
                        const link = a.wikipediaUrl;

                        getMap(longitude, latitude, summary, img, title, link);


                        bounds.extend(location);

                    });
                    map.fitBounds(bounds);
                });
        });
    }
    findingInfo();

}());
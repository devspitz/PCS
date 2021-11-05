/* global google */
(function () {
    'use strict';

    function doTimeoutWithPromise(callback, delay) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    resolve(callback());
                } catch (e) {
                    reject(e);
                }
            }, delay);
        });
    }

    const tagInput = $('#tag');
    const rowsInput = $('#rows');
    const placesList = $('#sidebar ul');

    const infoWindow = new google.maps.InfoWindow();
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: {
            lat: -25.363882,
            lng: 131.044922
        }
    });

    $('#go').submit(async e => {
        e.preventDefault();

        try {
            const response = await fetch(`http://api.geonames.org/wikipediaSearch?q=${tagInput.val()}&maxRows=${rowsInput.val()}&username=slubowsky&type=json`);
            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
            const data = await response.json();
            //console.log(data);

            let selectedPlace;
            const bounds = new google.maps.LatLngBounds();
            data.geonames.forEach(place => {
                const marker = new google.maps.Marker({
                    position: {
                        lat: place.lat,
                        lng: place.lng
                    },
                    map: map,
                    animation: google.maps.Animation.DROP,
                    title: place.title,
                    icon: place.thumbnailImg ? {
                        url: place.thumbnailImg,
                        scaledSize: new google.maps.Size(50, 50)
                    } : undefined
                });

                marker.addListener('click', () => {
                    infoWindow.setContent(`
            <h3>${place.title}</h3>
            <p>${place.summary}</p>
            <br>
            <a target="_blank" href="http://${place.wikipediaUrl}">more info</a>
          `);
                    infoWindow.open(map, marker);
                });

                bounds.extend(marker.getPosition());

                const li = $(`
          <li>
            <img src="${place.thumbnailImg}" alt="${place.title}">
            <span>${place.title}</span>
            <div class="summary">${place.summary}</div>
          </li>`)
                    .appendTo(placesList)
                    .click(async () => {
                        if (selectedPlace === place) {
                            $('.summary').slideUp('slow');
                            selectedPlace = null;
                            return;
                        }
                        selectedPlace = place;
                        $('.summary').slideUp('slow');
                        li.find('.summary').slideDown('slow');

                        const boundsToGoTo = map.getBounds();
                        boundsToGoTo.extend(marker.getPosition());
                        map.fitBounds(boundsToGoTo);
                        await doTimeoutWithPromise(() => map.panTo(marker.getPosition()), 1000);
                        await doTimeoutWithPromise(() => map.setZoom(18), 1000);
                    });
            });
            map.fitBounds(bounds);
        }
        catch (error) {
            console.error(error);
        }
    });


    const drawingManager = new google.maps.drawing.DrawingManager({
        drawingMode: google.maps.drawing.OverlayType.MARKER,
        drawingControl: true,
        drawingControlOptions: {
            position: google.maps.ControlPosition.TOP_CENTER,
            drawingModes: [
                google.maps.drawing.OverlayType.MARKER,
                google.maps.drawing.OverlayType.CIRCLE,
                google.maps.drawing.OverlayType.POLYGON,
                google.maps.drawing.OverlayType.POLYLINE,
                google.maps.drawing.OverlayType.RECTANGLE,
            ],
        },
        markerOptions: {
            icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
        },
        circleOptions: {
            fillColor: "#ffff00",
            fillOpacity: 1,
            strokeWeight: 5,
            clickable: false,
            editable: true,
            zIndex: 1,
        },
    });

    drawingManager.setMap(map);

    let drawingsArray = [];
    google.maps.event.addListener(drawingManager, 'markercomplete', e => {

        drawingsArray.push({ type: 'marker', position: e.getPosition() });
        localStorage.setItem('drawing', JSON.stringify(drawingsArray));

    });

    google.maps.event.addListener(drawingManager, 'circlecomplete', e => {
        console.log(e);
        drawingsArray.push({ type: 'circle', center: e.getCenter(), radius: e.getRadius() });
        localStorage.setItem('drawing', JSON.stringify(drawingsArray));

    });
    google.maps.event.addListener(drawingManager, 'rectanglecomplete', e => {

        drawingsArray.push({ type: 'rectangle', bounds: e.getBounds() });
        localStorage.setItem('drawing', JSON.stringify(drawingsArray));

    });
    google.maps.event.addListener(drawingManager, 'polylinecomplete', e => {

        drawingsArray.push({ type: 'polyline', path: e.getPath().getArray() });
        localStorage.setItem('drawing', JSON.stringify(drawingsArray));

    });
    google.maps.event.addListener(drawingManager, 'polygoncomplete', e => {

        drawingsArray.push({ type: 'polygon', path: e.getPath().getArray() });
        localStorage.setItem('drawing', JSON.stringify(drawingsArray));

    });



    const markerData = localStorage.getItem('drawing');
    if (markerData) {
        console.log(markerData);
        drawingsArray = JSON.parse(markerData);

        drawingsArray.forEach((drawing) => {
            if (drawing.type === 'marker') {
                new google.maps.Marker({
                    position: drawing.position,
                    map: map,
                    animation: google.maps.Animation.DROP,
                    title: 'Your marker',
                    icon: {
                        url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
                        scaledSize: new google.maps.Size(50, 50)
                    }
                })
            } else if (drawing.type === 'circle') {
                new google.maps.Circle({
                    radius: drawing.radius,
                    center: drawing.center,
                    map: map,
                    title: 'Your Circle',
                });
            } else if (drawing.type === 'rectangle') {
                new google.maps.Rectangle({
                    bounds: drawing.bounds,
                    map: map,
                    title: 'Your Rectangle',
                });
            } else if (drawing.type === 'polyline') {
                new google.maps.Polyline({
                    path: drawing.path,
                    map: map,
                    title: 'Your Polyline',
                });
            } else if (drawing.type === 'polygon') {
                new google.maps.Polygon({
                    path: drawing.path,
                    map: map,
                    title: 'Your Polygon',
                });
            }
        });
    }
}());
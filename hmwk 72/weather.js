(function () {
    'use strict';
    const appID = 'b71053d6a23e594f7a4d49f3b8c74e52';

    const zipInput = $('#zip');
    const location = $('#location');
    const details = $('#details');
    const icon = $('#icon');

    const noWeather = $('.noWeather')
    const yesWeather = $('.hasWeather')
    const error = $('.error')

    yesWeather.hide();
    $('form').submit(e => e.preventDefault());

    zipInput.change(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipInput.val()}&appid=${appID}`)
            .then(r => {
                if (!r.ok) {
                    throw new Error(`${r.status} ${r.statusText}`);
                }
                return r.json();
            })
            .then(weather => {
                noWeather.hide();
                yesWeather.show();

                console.log(weather);
                location.text(weather.name);
                icon.attr('src', `http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`);
                details.text(`${weather.main.temp} and ${weather.weather[0].description}`);
            })
            .catch(e => {
                noWeather.show();
                yesWeather.hide();
                error.text(e.message)
            });
    });
}());
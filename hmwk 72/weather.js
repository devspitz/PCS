(function () {
    const zip = $('#zip');
    zip.change(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip.val()}&appid=b71053d6a23e594f7a4d49f3b8c74e52`)
            .then(r => r.json())
            .then(weather => console.log(weather))
    });
}());
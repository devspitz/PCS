(function () {
    let dragging = false;
    const box = $('#box').mousedown(() => {
        dragging = true;
    }).mousemove(e => {
        if (dragging) {
            box.css({ top: e.pageY, left: e.pageX })
        }
    }).mouseup(() => {
        dragging = false;
    });
}());
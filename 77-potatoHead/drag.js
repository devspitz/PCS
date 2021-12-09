(function () {
    'use strict';

    let dragging = null;
    let offset;

    $(document)
        .on('mousedown', '.box', e => {
            dragging = $(e.target);
            offset = { x: e.offsetX, y: e.offsetY };
        })
        .mousemove(e => {
            if (dragging) {
                e.preventDefault();
                dragging.css({ top: e.pageY - offset.y, left: e.pageX - offset.x });
            }
        })
        .mouseup(() => {
            if (dragging) {
                dragging = false;
            }
        });

    const colorInput = $('#color');
    $('#add').click(() => {
        $('<div class="box"></div>')
            .appendTo($(document.body))
            .css('background-color', colorInput.val());
    });
}());
(function () {
    'use strict';

    let dragging = null;
    let offset;
    let newPart;

    $(document)
        .on('mousedown', '.part', e => {
            dragging = $(e.target);
            console.log(dragging);
            offset = { x: e.offsetX, y: e.offsetY };
            if (dragging.classList.hasClass('part limb')) {
                newPart = $(`<img src=${dragging[0].currentSrc} class="part limb" alt="" position="absoute" top=${dragging.top} left=${dragging.left}>`);
                $('#partsSection').append(newPart);
            }
        })
        .mousemove(e => {
            if (dragging) {
                e.preventDefault();
                if (dragging.hasClass('limb')) {
                    newPart.css({ top: e.pageY - offset.y, left: e.pageX - offset.x });
                    $('#partsSection').append(newPart);
                }
            }
        })
        .mouseup(() => {
            if (dragging) {
                dragging = false;
            }
        });
}());
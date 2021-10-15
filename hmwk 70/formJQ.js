(function () {
    const theButton = $('#submit');
    const theCheckbox = $('#allow');
    const theDiv = $('<div> <h1 id = "newName"> </h1> <br> <h1 id = "newAddress"> </h1></div>');
    theDiv.appendTo('body');

    theCheckbox.on('change', () => {
        console.log('check', theCheckbox.prop("checked"));
        if (theCheckbox.prop("checked")) {
            theButton.prop('disabled', false);

        };
    });

    $('#theForm').submit((e) => {
        e.preventDefault();
        const theName = $('#name');
        const theAddress = $('#address');
        $('#newName').text(theName.val());
        $('#newAddress').text(theAddress.val());

    });
}());
// backend js for various materialize components
$(document).ready(function() {
    $(".button-collapse").sideNav({
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true // Choose whether you can drag to open on touch screens
    });
    $('.close-menu').on('click', function(){
        $(this).sideNav('hide');
    });

    $('.collapsible').collapsible();

    $('.dropdown-button').dropdown({
            inDuration: 300,
            outDuration: 400,
            constrain_width: false, // Does not change width of dropdown to that of the activator
            hover: false, // Activate on hover
            gutter: 0, // Spacing from edge
            belowOrigin: true, // Displays dropdown below the button
            alignment: 'left' // Displays dropdown with edge aligned to the left of button
        }
    );

    $('select').material_select();

    $('[data-toggle="datepicker"]').datepicker({

        format: 'yyyy-mm-dd',

    });
});

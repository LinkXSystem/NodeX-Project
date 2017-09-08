(function () {
    'use strict';
    // $('.basic').css({display: 'none'});

    var tool = true;

    $('.circular').on('click', function () {
        if (tool) {
            $('.button-group').css({opacity: '1',width: '375px', transform: ''});
            // setTimeout(function () {
            //     $('.basic').css({display: 'inherit'});
            // }, 500);
            tool = false;
        } else {
            // $('.basic').css({display: 'none'});
            $('.button-group').css({width: '0px'});
            setTimeout(function () {
                $('.button-group').css({opacity: '0'});
            }, 500);
            tool = true;
        }
    });

    var chat = true;

    $('.controller-cores').on('click', function () {
        if (chat) {
            $('.message-container').css({right: '0px'});
            chat = false;
        } else {
            $('.message-container').css({right: '-425px'});
            chat = true;
        }
    });

    // function hidden (name) {
    //     return function () {
    //         $('.colors').transition({ opacity: 0, duration: 200, delay: 200, easing: 'out'}, function () {
    //             setTimeout(function () {
    //                 $('.colors').css({display: 'none'});
    //                 $('.modules-container').css({width: '275px', right: '0px'});
    //             }, 200);
    //         });
    //     }
    // }
    //
    // function appear () {
    //     return function () {
    //         $('.colors').transition({ opacity: 1, duration: 200, delay: 400, easing: 'out'}, function () {
    //             setTimeout(function () {
    //                 $('.modules-container').css({width: '100%', right: '0px'});
    //                 $('.colors').css({display: 'block'});
    //             }, 200);
    //         });
    //     }
    // }
})();
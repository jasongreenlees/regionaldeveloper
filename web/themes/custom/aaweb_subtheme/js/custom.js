(function ($) {
    // customize the overlay property according to the different requested page.
    Drupal.behaviors.aaweb_subtheme_script = {
        attach: function (context, settings) {
            var navbar = $('#navbar-main');
            var waypoint = new Waypoint({
                element: document.getElementById('main-content'),
                handler: function(direction) {
                    if(direction == 'down') {
                        navbar.addClass('nav-sticky-solid');
                    }
                    else {
                        navbar.removeClass('nav-sticky-solid');
                    }
                }
            })
        }
    };

    // Drupal.behaviors.StickyHeader = {
    //     attach: function(context, settings) {
    //         var $header = $('header');
    //         var lastScrollTop = 0;

    //         $(window).scroll(function() {
    //             var scroll = $(window).scrollTop();
    //             var current = $(this).scrollTop();
    //             if (scroll >= 100 && current > lastScrollTop) {
    //                 $($header).addClass('sticky');
    //             } else if (scroll < 100) {
    //                 $($header).removeClass('sticky');
    //             }
    //             if (scroll > 100 && current < lastScrollTop) {
    //                 $($header).addClass('small');
    //             } else {
    //                 $($header).removeClass('small');
    //             }
    //             lastScrollTop = current;
    //         });
    //         //Check if element highlight exists
    //         var $body = $('body', context);
    //         var $highlight = $('.paragraph-components > .paragraph--type--landing-page-highlight:first-child');
    //         if ($($highlight).length === 0) {
    //             $($body).addClass('no-highlight-element');
    //         }
    //     }
    // };

})(jQuery);
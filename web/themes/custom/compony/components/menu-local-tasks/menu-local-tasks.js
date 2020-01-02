(($) => {
  Drupal.behaviors.Tabs = {
    attach: function(context, settings) {
      $(document).on('click', '.tabs__tab--active a', function(e){
        e.preventDefault();
        $(this).parents('.tabs').toggleClass('js-expanded');
      });
    }
  };
})(jQuery);

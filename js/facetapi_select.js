(function ($) {
  Drupal.behaviors.facetapiSelect = {
    attach: function(context) {
      $(".block-facetapi .form-submit").hide();
    }
  }; 
})(jQuery);
  

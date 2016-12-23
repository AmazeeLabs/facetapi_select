/**
 * @file
 * Handles Facet API Select ajax functionality.
 */
(function ($) {
  Drupal.behaviors.facetapiSelect = {
    attach: function(context) {
      $(".facetapi-select-submit").hide();

      $('.facetapi-select').change(function() {
        this.form.submit();
      });
    }
  };
})(jQuery);
